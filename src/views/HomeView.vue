<template>
  <v-app>
    <Navbar />
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto rounded-xl" flat>
            <v-img src="cover2.jpg" max-height="100%" max-width="100%" contain>
              <v-card-title class="top ml-10">
                <h2 class="title1">order your</h2>
              </v-card-title>
              <v-card-title class="mt-n8 ml-10">
                <h2 class="title2">daily Groceries</h2>
              </v-card-title>
              <v-card-text class="ml-10">
                <h3 class="text-green">#Free Delivery</h3>
              </v-card-text>
              <v-card-text class="">
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      class="d-none d-sm-none d-md-block"
                      variant="solo"
                      label="Search your daily groceries"
                      rounded
                      outlined
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="2" class="marginLeft">
                    <v-btn
                      color="green"
                      rounded
                      dark
                      x-large
                      class="py-6 my-1 d-none d-sm-none d-md-flex"
                    >
                      search
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-img>
          </v-card>
          <v-toolbar flat color="transparent">
            <v-toolbar-title class="text-h6"> category </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="toggle_exclusive" color="#49D9A0">
              <v-btn>
                <v-icon icon="mdi:mdi mdi-chevron-left"> </v-icon>
              </v-btn>
              <v-btn>
                <v-icon icon="mdi:mdi mdi-chevron-right"> </v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-toolbar>
          <Category />
          <v-toolbar flat color="transparent" class="mt-4">
            <v-toolbar-title class="text-h6"> popular product </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn rounded color="green" dark class="px-8">See All </v-btn>
          </v-toolbar>
          <Product />
          <v-card class="rounded-xl mt-8 pb-4" flat color="#E2F2E2">
            <v-toolbar flat color="transparent" class="mb-4">
              <v-toolbar-title class="text-h6 mt-5 mb-3">
                popular bundle pack
              </v-toolbar-title>
            </v-toolbar>
            <Pack />
          </v-card>
          <v-card class="mt-8 py-4 px-16" flat color="#FAFAFA">
            <div
              style="
                position: absolute;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              "
            >
              <h3>What Our Clients Say</h3>
            </div>
            <Client />
            <nnn/>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";
import Navbar from "../components/Nav_bar.vue";
import Category from "../components/Category.vue";
import Product from "../components/Product.vue";
import Pack from "../components/Pack.vue";
import Client from "../components/Client.vue";
import nnn from "../components/nnn.vue";
// Components

export default defineComponent({
  name: "HomeView",
  setup() {
    return {};
  },
  data: () => ({
    toggle_exclusive: 1,
  }),
  components: {
    Navbar,
    Category,
    Product,
    Pack,
    Client,
    nnn
  },
});
</script>
<style>
.v-field__overlay {
  border: 2px solid green !important;
}
.v-btn-group--density-default.v-btn-group {
  height: 38px;
}
.v-btn--size-default {
  min-width: 40px;
}
</style>
<style scoped>
.marginLeft {
  margin-left: -121px;
}

.mtop {
  margin-top: 100px;
}
.mbottom {
  margin-bottom: 100px;
}

.v-card.borderme {
  border: 2px solid green !important;
}
.v-card.borderout {
  border: 1px solid #d5f0db !important;
}
.v-btn:not(.v-btn--round).v-size--defult.add {
  min-width: 0px !important;
}
.theme--light.v-sheet--outlined.mobile {
  border: 2px solid black !important;
}
@media only screen and (max-width: 600px) {
  h2.title2,
  h2.title1 {
    font-size: 15px;
  }
  .top {
    margin-top: 20px;
  }
}
@media only screen and (min-width: 600px) {
  .top {
    margin-top: 70px;
  }
}
@media only screen and (min-width: 768px) {
  .top {
    margin-top: 120px;
  }
}
</style>
