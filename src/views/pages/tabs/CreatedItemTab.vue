<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100 md-small-size-100 mx-auto">
      <div class="md-layout collections">
        <div class="md-layout-item md-size-50 md-small-size-100">
          <full-bg-card :card-image="cardFullBg.fullBg1">
            <template slot="cardContent">
              <badge type="warning"> Spring 2016 </badge>
              <a href="javascript:void(0)">
                <h2 class="card-title">Espace</h2>
              </a>
            </template>
          </full-bg-card>
        </div>
        <div class="md-layout-item md-size-50 md-small-size-100">
          <full-bg-card :card-image="cardFullBg.fullBg2">
            <template slot="cardContent">
              <badge type="info"> Spring 2016 </badge>
              <a href="javascript:void(0)">
                <h2 class="card-title">Portland Rose</h2>
              </a>
            </template>
          </full-bg-card>
        </div>
        <div class="md-layout-item md-size-50 md-small-size-100">
          <full-bg-card :card-image="cardFullBg.fullBg3">
            <template slot="cardContent">
              <badge type="danger"> Summer 2016 </badge>
              <a href="javascript:void(0)">
                <h2 class="card-title">Canberra</h2>
              </a>
            </template>
          </full-bg-card>
        </div>
        <div class="md-layout-item md-size-50 md-small-size-100">
          <full-bg-card :card-image="cardFullBg.fullBg4">
            <template slot="cardContent">
              <badge type="success"> Winter 2015 </badge>
              <a href="javascript:void(0)">
                <h2 class="card-title">Floralia</h2>
              </a>
            </template>
          </full-bg-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FullBgCard, Badge } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: {
    FullBgCard,
    Badge,
  },
  mounted() {
    const walletAddress = localStorage.getItem("metaMaskAddress");
    if (walletAddress) {
      this.profileName = walletAddress;
    } else {
      this.$router.push("/");
    }
  },
  mixins: [Mixins.HeaderImage],
  bodyClass: "profile-page",
  data() {
    return {
      profileName: "",
      image: require("@/assets/img/city-profile.jpg"),
      img: require("@/assets/img/faces/christian.jpg"),
      cardFullBg: {
        fullBg1: require("@/assets/img/examples/mariya-georgieva.jpg"),
        fullBg2: require("@/assets/img/examples/clem-onojeghuo.jpg"),
        fullBg3: require("@/assets/img/examples/olu-eletu.jpg"),
        fullBg4: require("@/assets/img/examples/floralia.jpg"),
      },
    };
  },
  methods: {
    copyToClipboard() {
      var input = document.createElement("input");
      input.setAttribute("value", this.profileName);
      document.body.appendChild(input);
      input.select();
      var result = document.execCommand("copy");
      document.body.removeChild(input);
      alert("Copy to clipboard successfull");
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile {
  text-align: left;
  .name {
    margin-top: -80px;
  }
  .md-card-profile,
  .md-card-testimonial {
    margin-top: 0px;
    padding: 0px;
    text-align: left;
    border: transparent;
  }
}

.profile-tabs::v-deep {
  margin-top: -10%;
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img:not(.img) {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
