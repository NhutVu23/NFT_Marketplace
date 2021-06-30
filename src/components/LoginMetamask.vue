<template>
  <div @click="loginMetamask">
    <slot></slot>
  </div>
</template>

<script>
import Web3 from "web3";
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
    async loginMetamask() {
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
      } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        this.web3TimerCheck(window.web3);
      } else {
        this.web3 = null;
        this.Log(this.MetamaskMsg.METAMASK_NOT_INSTALL, "NO_INSTALL_METAMASK");
        // console.error(
        //   "Non-Ethereum browser detected. You should consider trying MetaMask!"
        // );
      }
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
    checkNetWork() {
      const netID = this.web3.utils.hexToNumber(window.ethereum.chainId); //User MetaMask's current status
      if (this.metaMaskAddress !== "" && netID === 1)
        return this.Log(this.MetamaskMsg.METAMASK_TEST_NET, "MAINNET");
      if (this.metaMaskAddress !== "" && netID === 3)
        return this.Log(this.MetamaskMsg.METAMASK_TEST_NET, "ROPSTEN");
      if (this.metaMaskAddress !== "" && netID === 42)
        return this.Log(this.MetamaskMsg.METAMASK_TEST_NET, "LOVAN");
      if (this.metaMaskAddress !== "" && netID === 4)
        return this.Log(this.MetamaskMsg.METAMASK_TEST_NET, "RINKEBY");
      if (this.metaMaskAddress !== "" && netID === 97)
        return this.Log(this.MetamaskMsg.METAMASK_TEST_NET, "BSC");
      if (this.metaMaskAddress !== "")
        this.Log(this.MetamaskMsg.METAMASK_MAIN_NET, "MAINNET");
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
