<template>
  <div
    id="vue-material-kit-pro"
    :class="{ 'nav-open': NavbarStore.showNavbar }"
  >
    <div class="global-loading text-center" v-show="loading">
      <img style="width: 50px" :src="loadimage" />
      <h2>Loading...</h2>
    </div>
    <div class="modal modal-bg show" v-show="loadingModal.isShow">
      <modal>
        <template slot="header">
          <h4 class="modal-title">{{ loadingModal.title }}</h4>
        </template>

        <template slot="body">
          <p>{{ loadingModal.description }}</p>
          <img style="width: 100%" src="./assets/img/modelImg.png" />
          <img style="width: 50px" :src="loadimage" />
        </template>
      </modal>
    </div>
    <router-view name="header" />
    <router-view />
    <router-view name="footer" />
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: { Modal },
  data: () => ({
    layout: null,
    hasRole: true,
    active: true,
    loadimage: require("@/assets/img/loading.gif"),
  }),
  computed: {
    loading() {
      return this.$store.state.global.loading;
    },
    loadingModal() {
      return this.$store.state.global.loadingModal;
    },
  },
  methods: {},
};
</script>

<style>
.global-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.4;
  padding-top: 48vh;
  z-index: 1001;
  color: white;
}
</style>
