<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter header-small"
      parallax-active="false"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-100 md-small-size-100 mx-auto text-center"
          >
            <h1 class="title">NFT Marketplace</h1>
            <h4 class="title">
              A market made for NFT, where everything is special
            </h4>

            <div class="md-layout text-center mt-2">
              <div class="md-layout-item">
                <md-button
                  href="javascript:void(0)"
                  class="md-round"
                  :class="
                    'All' == filterName ? ' md-behance' : 'md-button-filter'
                  "
                  @click="
                    () => {
                      filterName = 'All';
                      getItems();
                    }
                  "
                >
                  All
                </md-button>
                <md-button
                  v-for="(category, i) in listCategory"
                  :key="i"
                  href="javascript:void(0)"
                  class="md-round"
                  :class="
                    category.name == filterName
                      ? ' md-behance'
                      : 'md-button-filter'
                  "
                  @click="
                    () => {
                      filterName = category.name;
                      categoryID = category._id;
                      getItems();
                    }
                  "
                >
                  <md-icon>{{ category.short_url }}</md-icon>
                  {{ category.name }}
                </md-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section pb-0">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-25 md-small-size-100">
              <md-card class="md-card md-card-refine md-card-plain">
                <md-card-content>
                  <h4 class="card-title">
                    Apply Filters
                    <md-button class="md-just-icon md-simple md-sm">
                      <md-icon>cached</md-icon>
                      <md-tooltip md-direction="top"> Reset Filter </md-tooltip>
                    </md-button>
                  </h4>
                  <collapse
                    :active-tab="1"
                    :collapse="[
                      'Price Range',
                      'Clothing',
                      'Designer',
                      'Colour',
                    ]"
                    icon="keyboard_arrow_down"
                    color-collapse="rose"
                  >
                    <template slot="md-collapse-pane-1">
                      <span class="price-content">
                        <span class="price-left"
                          >€{{ Math.floor(this.sliders.rangeSlider[0]) }}</span
                        >
                        <span class="price-right"
                          >€{{ Math.floor(this.sliders.rangeSlider[1]) }}</span
                        >
                      </span>

                      <slider
                        v-model="sliders.rangeSlider"
                        :range="{ min: 101, max: 700 }"
                        type="rose"
                        :connect="true"
                        @input="newValue"
                      />
                    </template>
                    <template slot="md-collapse-pane-2">
                      <md-checkbox v-model="clothing.blazers" class="mb-0">
                        Blazers
                      </md-checkbox>
                      <md-checkbox v-model="clothing.casualShirts" class="mb-0">
                        Casual Shirts
                      </md-checkbox>
                      <md-checkbox v-model="clothing.formalShirts" class="mb-0">
                        Formal Shirts
                      </md-checkbox>
                      <md-checkbox v-model="clothing.jeans" class="mb-0">
                        Jeans
                      </md-checkbox>
                      <md-checkbox v-model="clothing.polos" class="mb-0">
                        Polos
                      </md-checkbox>
                      <md-checkbox v-model="clothing.pyjamas" class="mb-0">
                        Pyjamas
                      </md-checkbox>
                      <md-checkbox v-model="clothing.shorts" class="mb-0">
                        Shorts
                      </md-checkbox>
                      <md-checkbox v-model="clothing.trousers" class="mb-0">
                        Trousers
                      </md-checkbox>
                    </template>
                    <template slot="md-collapse-pane-3">
                      <md-checkbox v-model="designer.all" class="mb-0">
                        All
                      </md-checkbox>
                      <md-checkbox v-model="designer.polo" class="mb-0">
                        Polo Ralph Lauren
                      </md-checkbox>
                      <md-checkbox v-model="designer.wooyoungmi" class="mb-0">
                        Wooyoungmi
                      </md-checkbox>
                      <md-checkbox v-model="designer.alexander" class="mb-0">
                        Alexander McQueen
                      </md-checkbox>
                      <md-checkbox v-model="designer.tomFord" class="mb-0">
                        Tom Ford
                      </md-checkbox>
                      <md-checkbox v-model="designer.ami" class="mb-0">
                        AMI
                      </md-checkbox>
                      <md-checkbox v-model="designer.berena" class="mb-0">
                        Berena
                      </md-checkbox>
                      <md-checkbox v-model="designer.sweeney" class="mb-0">
                        Thom Sweeney
                      </md-checkbox>
                      <md-checkbox v-model="designer.burberry" class="mb-0">
                        Burberry Prorsum
                      </md-checkbox>
                      <md-checkbox v-model="designer.calvin" class="mb-0">
                        Calvin Klein
                      </md-checkbox>
                      <md-checkbox v-model="designer.kingsman" class="mb-0">
                        Kingsman
                      </md-checkbox>
                      <md-checkbox v-model="designer.monaco" class="mb-0">
                        Club Monaco
                      </md-checkbox>
                      <md-checkbox v-model="designer.dolce" class="mb-0">
                        Dolce & Gabanna
                      </md-checkbox>
                      <md-checkbox v-model="designer.gucci" class="mb-0">
                        Gucci
                      </md-checkbox>
                      <md-checkbox v-model="designer.biglioli" class="mb-0">
                        Biglioli
                      </md-checkbox>
                      <md-checkbox v-model="designer.lanvin" class="mb-0">
                        Lanvin
                      </md-checkbox>
                      <md-checkbox v-model="designer.piana" class="mb-0">
                        Loro Piana
                      </md-checkbox>
                      <md-checkbox v-model="designer.massimo" class="mb-0">
                        Massimo Alba
                      </md-checkbox>
                    </template>
                    <template slot="md-collapse-pane-4">
                      <md-checkbox v-model="colour.all" class="mb-0">
                        All
                      </md-checkbox>
                      <md-checkbox v-model="colour.black" class="mb-0">
                        Black
                      </md-checkbox>
                      <md-checkbox v-model="colour.blue" class="mb-0">
                        Blue
                      </md-checkbox>
                      <md-checkbox v-model="colour.brown" class="mb-0">
                        Brown
                      </md-checkbox>
                      <md-checkbox v-model="colour.gray" class="mb-0">
                        Gray
                      </md-checkbox>
                      <md-checkbox v-model="colour.green" class="mb-0">
                        Green
                      </md-checkbox>
                      <md-checkbox v-model="colour.neutrals" class="mb-0">
                        Neutrals
                      </md-checkbox>
                      <md-checkbox v-model="colour.purple" class="mb-0">
                        Purple
                      </md-checkbox>
                    </template>
                  </collapse>
                </md-card-content>
              </md-card>
            </div>
            <div class="md-layout-item md-size-75 md-small-size-100">
              <div v-if="listItems && listItems.length > 0" class="md-layout">
                <div
                  v-for="(item, i) in listItems"
                  :key="i"
                  class="md-layout-item md-size-25 md-small-size-100"
                >
                  <aution-card
                    text-center
                    class="mt-3"
                    card-plain
                    :item-id="item._id"
                    :card-image="item.image"
                    :shadow-normal="false"
                    :no-colored-shadow="false"
                  >
                    <template slot="cardContent">
                      <h4 class="card-title">{{ item.name }}</h4>
                    </template>
                    <template slot="cardAction">
                      <div class="price-container">Price</div>
                      <div class="ml-auto price-container">
                        <md-button class="md-success">
                          {{ item.minBid || 0 }} ETH
                        </md-button>
                      </div>
                    </template>
                  </aution-card>
                </div>
              </div>
              <div
                class="md-layout-item md-size-60 md-small-size-100 mx-auto text-center"
                style="padding: 10%"
                v-else
              >
                <h2 class="description">No Data Information</h2>
              </div>
              <div
                v-if="listItems && listItems.length > 15"
                class="md-layout-item md-size-10 md-small-size-100 mx-auto"
              >
                <md-button
                  @click="loadNextItems"
                  class="md-button-filter md-round"
                >
                  Show More
                </md-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { Collapse, Slider } from "@/components";
import Mixins from "@/plugins/basicMixins";
import AutionCard from "../../components/cards/AutionCard.vue";

export default {
  components: {
    Collapse,
    AutionCard,
    Slider,
  },
  async mounted() {
    this.$loading(true);
    try {
      await this.getItems();
    } catch (error) {
      this.$failAlert({
        text: error,
      });
    }
    this.$loading(false);
  },
  mixins: [Mixins.HeaderImage],
  data() {
    return {
      listItems: [],
      filterName: "All",
      filterData: {
        skip: 0,
        limit: 16,
        keySearch: null,
      },
      categoryID: null,
      sliders: {
        rangeSlider: [101, 700],
      },
      clothing: {
        blazers: true,
        casualShirts: false,
        formalShirts: false,
        jeans: false,
        polos: false,
        pyjamas: false,
        shorts: false,
        trousers: false,
      },
      designer: {
        all: true,
        polo: false,
        wooyoungmi: false,
        alexander: false,
        tom: false,
        ami: false,
        berena: false,
        sweeney: false,
        burberry: false,
        calvin: false,
        kingsman: false,
        monaco: false,
        dolce: false,
        gucci: false,
        biglioli: false,
        lanvin: false,
        piana: false,
        massimo: false,
      },
      colour: {
        all: true,
        black: false,
        blue: false,
        brown: false,
        gray: false,
        green: false,
        neutrals: false,
        purple: false,
      },
      image: require("@/assets/img/examples/clark-street-merc.jpg"),
    };
  },
  computed: {
    listCategory() {
      return this.$store.state.category.categories;
    },
  },
  methods: {
    newValue(e) {
      this.sliders.rangeSlider[0] = e[0];
      this.sliders.rangeSlider[1] = e[1];
    },
    async loadNextItems() {
      try {
        this.filterData.keySearch = this.categoryID;
        let newData = await this.$store.dispatch(
          this.filterName == "All"
            ? "item/getAllItems"
            : "item/getItemsByCategory",
          this.filterData
        );
        if (newData && newData.length > 0) {
          this.listItems.push.apply(this.listItems, newData);

          if (newData.length == this.filterData.limit) {
            this.filterData.skip += newData.length;
          } else {
            this.skip = 0;
          }
        }
      } catch (error) {}
    },

    async getItems() {
      this.listItems = await this.$store.dispatch(
        this.filterName == "All"
          ? "item/getAllItems"
          : "item/getItemsByCategory",
        {
          skip: 0,
          limit: 16,
          keySearch: this.categoryID,
        }
      );

      if (this.listItems.length == this.filterData.limit) {
        this.filterData.skip += this.listItems.length;
      } else {
        this.skip = 0;
      }
    },
    // async getItemsByCategory() {
    //   this.listItems = await this.$store.dispatch("item/getItemsByCategory", {
    //     skip: 0,
    //     limit: 16,
    //     keySearch: this.categoryID,
    //   });

    //   if (this.listItems.length == this.filterData.limit) {
    //     this.filterData.skip += this.listItems.length;
    //   } else {
    //     this.skip = 0;
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
.mt-3 {
  margin-top: 1.875rem * 2;
}
.mt-2 {
  margin-top: 1.875rem;
}
.mb-0 {
  margin-bottom: 0;
}
.md-round {
  border: 1px solid transparent;
}
</style>
