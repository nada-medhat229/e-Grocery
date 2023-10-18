<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-row justify="" class="space px-16">
    <v-col cols="12" xs="12" md="4" v-for="(product, i) in products" :key="i">
      <v-card class="mx-auto rounded-xl mx-2 border" max-width="300" flat outlined>
        <div align="center" justify="center">
          <v-img :src="product.img" max-height="300" max-width="300" contain>
          </v-img>
        </div>
        <v-card-title>
          {{ product.title }}
        </v-card-title>
        <v-card-title class="text-grey text-grey-darken-1 caption mt-n6 fs-6">{{
          product.subtitle
        }}</v-card-title>
        <v-card-title class="mt-n6">{{ product.price }}</v-card-title>
        <v-card-actions class="mw-2 mt-n3">
          <v-btn outlined class="mt-n2 add">
            <v-icon
              icon="mdi:mdi mdi-minus"
              color="green"
              @click="decrement"
            ></v-icon>
          </v-btn>
          <strong class="mx-2 mb-2" v-text="pbm"></strong>
          <v-btn outlined class="mt-n2 add">
            <v-icon
              icon="mdi:mdi mdi-plus"
              color="green"
              @click="increment"
            ></v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn class="mx-2 mt-n3" fab dark small color="green">
            <v-icon dark  icon="mdi:mdi mdi-shopping"></v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    pbm: 1,
    products: [
      { img: "p1.jpg", title: "meat&fish", subtitle: "1kg", price: "$13" },
      { img: "p2.jpg", title: "vegetables", subtitle: "1kg", price: "$13" },
      { img: "p3.jpg", title: "medicien", subtitle: "1kg", price: "$13" },
      { img: "p4.webp", title: "baby", subtitle: "1kg", price: "$13" },
      { img: "p5.jpg", title: "office", subtitle: "1kg", price: "$13" },
    ],
  }),
  methods: {
    decrement() {
      this.pbm--;
    },
    increment() {
      this.pbm++;
    },
  },
};
</script>
<style lang=""></style>
