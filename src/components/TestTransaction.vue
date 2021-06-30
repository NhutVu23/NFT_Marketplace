<template>
  <div @click="checkTransaction">
    <slot></slot>
  </div>
</template>

<script>
import Web3 from "web3";
import ExchangeV1 from "../assets/abis/ExchangeV1.json";
import RaribleToken from "../assets/abis/RaribleToken.json";
export default {
  props: {
    userMessage: {
      type: String,
      default: "null",
    },
  },
  data() {
    return {
      web3: null,
      MetaMaskId: "1", // main net netID
      netID: "1", // user metamask id
      metaMaskAddress: "", // user Address
      Web3Interval: null,
      AccountInterval: null,
      NetworkInterval: null,
      stateLog: null,
      isComplete: false,
      type: "INIT",
      MetamaskMsg: {
        LOAD_MATAMASK_WALLET_ERROR: "Loading metamask error, please try later",
        EMPTY_METAMASK_ACCOUNT:
          "Please log in to your metamask to continue with this app.",
        NETWORK_ERROR: "The connection is abnormal, please try again",
        METAMASK_NOT_INSTALL: "Please install metamask for this application",
        METAMASK_TEST_NET: "Currently not in the main network.",
        METAMASK_MAIN_NET: "Currently Main network",
        USER_DENIED_ACCOUNT_AUTHORIZATION: "User denied account authorization",
      },
    };
  },
  methods: {
    async checkTransaction() {
      if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
          await ethereum.enable();
          this.web3TimerCheck(window.web3);
        } catch (error) {
          this.Log(
            this.MetamaskMsg.USER_DENIED_ACCOUNT_AUTHORIZATION,
            "USER_DENIED_ACCOUNT_AUTHORIZATION"
          );
        }
      }

      // else if (window.web3) {
      //   window.web3 = new Web3(web3.currentProvider);
      //   this.web3TimerCheck(window.web3);
      // } else {
      //   this.web3 = null;
      //   this.Log(this.MetamaskMsg.METAMASK_NOT_INSTALL, "NO_INSTALL_METAMASK");
      // }
    },
    checkWeb3() {
      let web3 = window.web3;
      if (typeof web3 === "undefined") {
        this.web3 = null;
        this.Log(this.MetamaskMsg.METAMASK_NOT_INSTALL, "NO_INSTALL_METAMASK");
      }
    },
    checkAccounts() {
      if (this.web3 === null) return;
      this.web3.eth.getAccounts((err, accounts) => {
        if (err != null)
          return this.Log(this.MetamaskMsg.NETWORK_ERROR, "NETWORK_ERROR");
        if (accounts.length === 0) {
          this.metaMaskAddress = "";
          this.Log(this.MetamaskMsg.EMPTY_METAMASK_ACCOUNT, "NO_LOGIN");
          return;
        }
        this.metaMaskAddress = accounts[0]; // user Address
      });
    },
    async checkNetWork() {
      const myContract = new window.web3.eth.Contract(
        ExchangeV1,
        "0x9229C7F98607ED24d38BE077Aba030719a2248ba"
      );
      const myContractRaribleToken = new window.web3.eth.Contract(
        RaribleToken,
        "0xB095C438fD4906F23AF7F4c697941A50C042E4E1"
      );

      // .call() read Contract
      // .send() write Contract
      const tmp = await myContract.methods.owner().call(); // return owner address
      // const result = await this.web3.eth.sign();
      const hashMsg = this.web3.utils.sha3(
        JSON.stringify({
          message: "hello",
          userAddress: this.metaMaskAddress,
        })
      );


      const result = await this.web3.eth.personal.sign(
        hashMsg,
        this.metaMaskAddress
      );
      const signingAddress = this.web3.eth.accounts.recover(hashMsg, result);

      const netID = this.web3.utils.hexToNumber(window.ethereum.chainId); //User MetaMask's current status


      const mint = await myContractRaribleToken.methods
        .mint(
          4,
          "28",
          "0xc68005c3303260d9dc1006aeeba114e11f5fd10030279d7dab2a54d59ec4cbeb",
          "0x1d182a7a8fd5fd867c94ebbf35e1cc6a04a18add8dd69567e46710cb9addc26b",
          // [[this.metaMaskAddress, 100]],
          [
            {
              recipient: this.metaMaskAddress,
              value: 1000,
            },
          ],
          1000,
          "/test_2"
          // {
          //   from: this.metaMaskAddress,
          // }
        )
        .send({ from: this.metaMaskAddress }); // return mint address

    },
    Log(msg, type = "") {
      const letType = type;
      if (letType === this.type) return;
      const message = this.userMessage === "null" ? msg : this.userMessage;
      this.type = type;
      this.$emit("onComplete", {
        web3: this.web3,
        type,
        metaMaskAddress: this.metaMaskAddress,
        message,
        netID: this.netID,
      });
    },
    web3TimerCheck(web3) {
      this.web3 = web3;
      this.checkAccounts();
      this.checkNetWork();
      // this.Web3Interval = setInterval(() => this.checkWeb3(), 1000);
      // this.AccountInterval = setInterval(() => this.checkAccounts(), 1000);
      // this.NetworkInterval = setInterval(() => this.checkNetWork(), 1000);
    },
  },
};
</script>
