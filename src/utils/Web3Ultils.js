import Web3 from "web3";
import ExchangeV1 from "../assets/abis/ExchangeV1.json";
import RaribleToken from "../assets/abis/RaribleToken.json";
import WETH from "../assets/abis/WETH.json";
import { failAlert } from "./ComponentUtils";
import store from "../store";

const ONE_ETHER = 100000000000000000000;
export const Web3Ultils = {
  sellItem: async function (result, item, metaMaskAddress) {
    if (window.ethereum && process.env.VUE_APP_RARIBLE_ADDRESS) {
      window.web3 = new Web3(ethereum);
      try {
        await ethereum.enable();

        const myContractRaribleToken = new window.web3.eth.Contract(
          RaribleToken,
          process.env.VUE_APP_RARIBLE_ADDRESS
        );
        //Mint Item
        if (!result.isMinted) {
          await this.mintItem(
            result,
            item,
            myContractRaribleToken,
            metaMaskAddress
          );
        }

        //Approve
        if (process.env.VUE_APP_TRANSFER_PROXY) {
          await this.approveItem(myContractRaribleToken, metaMaskAddress);

          //Sign Order
          if (process.env.VUE_APP_WETH && !item.sellOrder) {
            await this.signOrder(result, item, metaMaskAddress);
          }
          return true;
        }
      } catch (error) {
        if (error.message) {
          failAlert({
            text: error.message,
          });
        } else {
          failAlert({
            text: error,
          });
        }
        return false;
      }
    } else {
      failAlert({
        text:
          "Non-Ethereum browser detected. You should consider trying MetaMask!",
      });
      return false;
    }
  },

  mintItem: async function (
    result,
    item,
    myContractRaribleToken,
    metaMaskAddress
  ) {
    const mint = await myContractRaribleToken.methods
      .mint(
        result.token_id,
        result.v,
        result.r,
        result.s,
        [
          {
            recipient: metaMaskAddress,
            value: item.royalties,
          },
        ],
        item.total_quantity,
        `/test_${result.token_id}`
      )
      .send({ from: metaMaskAddress }); // return mint address
    item.id = item._id;
    item.mintTransactionHash = mint.transactionHash;
    item.wallet_address = metaMaskAddress;
    store.dispatch("item/editItem", item);
  },

  approveItem: async function (myContractRaribleToken, metaMaskAddress) {
    const isApprove = await myContractRaribleToken.methods
      .isApprovedForAll(metaMaskAddress, process.env.VUE_APP_TRANSFER_PROXY)
      .call();

    if (!isApprove) {
      const approve = await myContractRaribleToken.methods
        .setApprovalForAll(process.env.VUE_APP_TRANSFER_PROXY, true)
        .send({ from: metaMaskAddress });

    }
  },

  signOrder: async function (result, item, metaMaskAddress) {
    const sellOrder = {
      key: {
        owner: metaMaskAddress,
        salt: new Date().getTime(),
        sellAsset: {
          token: process.env.VUE_APP_RARIBLE_ADDRESS,
          tokenId: result.token_id,
          assetType: 2,
        },
        buyAsset: {
          token: process.env.VUE_APP_WETH,
          tokenId: 0,
          assetType: 1,
        },
      },
      selling: 1,
      buying: `${item.minBid * ONE_ETHER}`,
      sellerFee: 2500,
    };

    const hash = web3.utils.keccak256(
      web3.eth.abi.encodeParameters(
        [
          {
            Order: {
              key: {
                owner: "address",
                salt: "uint256",
                sellAsset: {
                  token: "address",
                  tokenId: "uint256",
                  assetType: "uint",
                },
                buyAsset: {
                  token: "address",
                  tokenId: "uint256",
                  assetType: "uint",
                },
              },
              selling: "uint256",
              buying: "uint256",
              sellerFee: "uint256",
            },
          },
        ],
        [sellOrder]
      )
    );
    const signature = await web3.eth.personal.sign(
      hash.slice(2),
      metaMaskAddress
    );

    if (signature) {
      item.signature = signature;
      item.wallet_address = metaMaskAddress;
      item.id = item._id;
      item.isPutOnMarket = true;
      item.sellOrder = JSON.stringify(sellOrder);
      store.dispatch("item/editItem", item);
    }
  },
  convertSignature: async function (signature) {
    return {
      r: signature.substring(0, 66),
      s: `0x${signature.substring(66, 130)}`,
      v: `0x${signature.substring(130, 132)}`,
    };
  },
  buyAsset: async function (result, item, metaMaskAddress) {
    if (window.ethereum && process.env.VUE_APP_RARIBLE_ADDRESS) {
      window.web3 = new Web3(ethereum);
      try {
        await ethereum.enable();

        await this.approveToken(metaMaskAddress);

        const exchangeV1 = new window.web3.eth.Contract(
          ExchangeV1,
          process.env.VUE_APP_RARIBLE_ADDRESS
        );
        const signature = await this.convertSignature(result.signature);
        const buyerFeeSignature = await this.convertSignature(
          result.buyerFeeSignature
        );

        const exchangeResult = await exchangeV1.methods
          .exchange(
            JSON.parse(result.sellOrder),
            {
              v: signature.v,
              r: signature.r,
              s: signature.s,
            },
            result.buyerFee,
            {
              v: buyerFeeSignature.v,
              r: buyerFeeSignature.r,
              s: buyerFeeSignature.s,
            },
            result.buyQuantities,
            metaMaskAddress
          )
          .send({ from: metaMaskAddress });


        if (exchangeResult) {
          store.dispatch("item/updateOwner", {
            token_id: item.token_id,
            wallet_address: metaMaskAddress,
          });
        }

        return true;
      } catch (error) {
        if (error.message) {
          failAlert({
            text: error.message,
          });
        } else {
          failAlert({
            text: error,
          });
        }
        return false;
      }
    } else {
      failAlert({
        text:
          "Non-Ethereum browser detected. You should consider trying MetaMask!",
      });
      return false;
    }
  },

  approveToken: async function (metaMaskAddress) {
    const wethContract = new window.web3.eth.Contract(
      WETH,
      process.env.VUE_APP_WETH
    );

    // const allowance = await wethContract.methods
    //   .allowance(metaMaskAddress, process.env.VUE_APP_ERC20_TRANSFER_PROXY)
    //   .call();

    const totalSupply = await wethContract.methods.totalSupply().call();

    // if (allowance < ) {
      
    const approve = await wethContract.methods
      .approve(process.env.VUE_APP_ERC20_TRANSFER_PROXY, totalSupply)
      .send({ from: metaMaskAddress });

    // }
  },
};
