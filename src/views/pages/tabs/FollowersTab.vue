<template>
  <div class="container">
    <div class="md-layout">
      <div class="md-layout-item md-size-20 md-small-size-100">
        <profile-card
          card-avatar
          :shadow-normal="false"
          :no-colored-shadow="false"
          :card-image="cardProfile3.cardProfile1"
        >
          <template slot="cardContent">
            <h4 class="card-title">Alec Thompson</h4>
            <h6 class="card-category text-muted">Ceo/Co-Founder</h6>
            <p class="card-description">
              Don't be scared of the truth because we need to restart the human
              foundation in truth And I love you like Kanye loves Kanye I love
              Rick Owens’ bed design but the back is...
            </p>
          </template>
          <template slot="cardAction">
            <md-button
              href="javascript:void(0)"
              class="md-linkedin md-just-icon md-round"
            >
              <i class="fab fa-linkedin" />
            </md-button>
            <md-button
              href="javascript:void(0)"
              class="md-twitter md-just-icon md-round"
            >
              <i class="fab fa-twitter" />
            </md-button>
            <md-button
              href="javascript:void(0)"
              class="md-dribbble md-just-icon md-round"
            >
              <i class="fab fa-dribbble" />
            </md-button>
          </template>
        </profile-card>
      </div>
      <div class="md-layout-item md-size-20 md-small-size-100">
        <profile-card
          card-avatar
          :shadow-normal="false"
          :no-colored-shadow="false"
          :card-image="cardProfile3.cardProfile4"
        >
          <template slot="cardContent">
            <h4 class="card-title">George West</h4>
            <h6 class="card-category text-muted">Backend Hacker</h6>
            <p class="card-description">
              Don't be scared of the truth because we need to restart the human
              foundation in truth And I love you like Kanye loves Kanye I love
              Rick Owens’ bed design but the back is...
            </p>
          </template>
          <template slot="cardAction">
            <md-button
              href="javascript:void(0)"
              class="md-dribbble md-just-icon md-round"
            >
              <i class="fab fa-dribbble" />
            </md-button>
            <md-button
              href="javascript:void(0)"
              class="md-twitter md-just-icon md-round"
            >
              <i class="fab fa-twitter" />
            </md-button>
          </template>
        </profile-card>
      </div>
      <div class="md-layout-item md-size-20 md-small-size-100">
        <profile-card
          card-avatar
          :shadow-normal="false"
          :no-colored-shadow="false"
          :card-image="cardProfile3.cardProfile3"
        >
          <template slot="cardContent">
            <h4 class="card-title">Gina Andrew</h4>
            <h6 class="card-category text-muted">Web Designer</h6>
            <p class="card-description">
              Don't be scared of the truth because we need to restart the human
              foundation in truth And I love you like Kanye loves Kanye I love
              Rick Owens’ bed design but the back is...
            </p>
          </template>
          <template slot="cardAction">
            <md-button
              href="javascript:void(0)"
              class="md-dribbble md-just-icon md-round"
            >
              <i class="fab fa-dribbble" />
            </md-button>
            <md-button
              href="javascript:void(0)"
              class="md-twitter md-just-icon md-round"
            >
              <i class="fab fa-twitter" />
            </md-button>
            <md-button
              href="javascript:void(0)"
              class="md-pinterest md-just-icon md-round"
            >
              <i class="fab fa-pinterest" />
            </md-button>
          </template>
        </profile-card>
      </div>
      <div class="md-layout-item md-size-20 md-small-size-100">
        <profile-card
          card-avatar
          :shadow-normal="false"
          :no-colored-shadow="false"
          :card-image="cardProfile3.cardProfile1"
        >
          <template slot="cardContent">
            <h4 class="card-title">Alec Thompson</h4>
            <h6 class="card-category text-muted">Ceo/Co-Founder</h6>
            <p class="card-description">
              Don't be scared of the truth because we need to restart the human
              foundation in truth And I love you like Kanye loves Kanye I love
              Rick Owens’ bed design but the back is...
            </p>
          </template>
          <template slot="cardAction">
            <md-button
              href="javascript:void(0)"
              class="md-linkedin md-just-icon md-round"
            >
              <i class="fab fa-linkedin" />
            </md-button>
            <md-button
              href="javascript:void(0)"
              class="md-twitter md-just-icon md-round"
            >
              <i class="fab fa-twitter" />
            </md-button>
            <md-button
              href="javascript:void(0)"
              class="md-dribbble md-just-icon md-round"
            >
              <i class="fab fa-dribbble" />
            </md-button>
          </template>
        </profile-card>
      </div>
      <div class="md-layout-item md-size-20 md-small-size-100">
        <profile-card
          card-avatar
          :shadow-normal="false"
          :no-colored-shadow="false"
          :card-image="cardProfile3.cardProfile4"
        >
          <template slot="cardContent">
            <h4 class="card-title">George West</h4>
            <h6 class="card-category text-muted">Backend Hacker</h6>
            <p class="card-description">
              Don't be scared of the truth because we need to restart the human
              foundation in truth And I love you like Kanye loves Kanye I love
              Rick Owens’ bed design but the back is...
            </p>
          </template>
          <template slot="cardAction">
            <md-button
              href="javascript:void(0)"
              class="md-dribbble md-just-icon md-round"
            >
              <i class="fab fa-dribbble" />
            </md-button>
            <md-button
              href="javascript:void(0)"
              class="md-twitter md-just-icon md-round"
            >
              <i class="fab fa-twitter" />
            </md-button>
          </template>
        </profile-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ProfileCard } from "@/components";
import Mixins from "@/plugins/basicMixins";

export default {
  components: { ProfileCard },
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
      cardProfile3: {
        cardProfile1: require("@/assets/img/faces/card-profile1-square.jpg"),
        cardProfile2: require("@/assets/img/faces/card-profile6-square.jpg"),
        cardProfile3: require("@/assets/img/faces/card-profile4-square.jpg"),
        cardProfile4: require("@/assets/img/faces/card-profile2-square.jpg"),
      },
    };
  },
  methods: {},
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
