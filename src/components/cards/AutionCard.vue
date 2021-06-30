<template>
  <md-card
    class="md-card-product"
    :class="{
      'md-card-plain': cardPlain,
    }"
  >
    <md-card-header
      @click.native="goToProduct"
      :shadow-normal="shadowNormal"
      :shadow-off="shadowOff"
      :no-colored-shadow="noColoredShadow"
    >
      <a href="javascript:void(0)">
        <div v-lazy-container="{ selector: 'img' }">
          <img class="img" :data-src="cardImage" :data-loading="loadimage" />
        </div>
      </a>
      <div
        v-if="!noColoredShadow && !shadowNormal && !shadowOff"
        class="colored-shadow"
        :style="shadowImageBlog(cardImage)"
      />
    </md-card-header>

    <md-card-content v-if="$slots.cardContent">
      <slot name="cardContent" />
    </md-card-content>

    <md-card-actions v-if="$slots.cardAction" @click.native="goToProduct">
      <slot name="cardAction" />
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    type: String,
    textCenter: Boolean,
    reverseRow: Boolean,
    cardImage: String,
    itemId: String,
    shadowNormal: Boolean,
    shadowOff: Boolean,
    cardPlain: Boolean,
    noColoredShadow: Boolean,
  },
  data() {
    return {
      loadimage: require("@/assets/img/loading.gif"),
    };
  },
  methods: {
    shadowImageBlog(image) {
      return {
        backgroundImage: `url(${image})`,
        opacity: 1,
      };
    },
    goToProduct() {
      this.$router.push("/asset/" + this.itemId);
    },
  },
};
</script>

<style lang="scss" scoped>
.img {
  height: 200px !important;
  width: auto !important;
  text-align: center;
}
.md-card-header {
  text-align-last: center;
}
</style>
