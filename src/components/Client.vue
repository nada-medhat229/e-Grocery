<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-row justify="" class="mt-10 mb-5">
    <v-col
      cols="12"
      xs="12"
      sm="6"
      md="4"
      v-for="(client, i) in clients"
      :key="i"
    >
      <v-card class="elevation-1 mx-auto" max-width="300" flat outlined>
        <v-list subheader two-line>
          <v-list-item>
            <v-avatar size="36px">
              <v-img alt="Avatar" :src="client.img"></v-img>
            </v-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ client.title }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ client.subtitle }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card-text>
          <div class="mt-n7">
            <v-rating v-model="rating" max="5"></v-rating>

          </div>
          {{ client.bio }}
        </v-card-text>
      </v-card>
     </v-col>
  </v-row>


</template>
<script>
export default {

  data: () => ({
    rating: 4.5,
    components:{
    },
    clients: [
      {
        img: "pic-2.png",
        title: "Noor",
        subtitle: "cpo on eran",
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, odio eius iusto omnis laboriosam architecto iste eum culpa neque, quae sit voluptatibus quis tempora iure rem expedita sed. Eveniet, consequuntur",
      },
      {
        img: "pic-2.png",
        title: "Noor",
        subtitle: "cpo on eran",
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, odio eius iusto omnis laboriosam architecto iste eum culpa neque, quae sit voluptatibus quis tempora iure rem expedita sed. Eveniet, consequuntur",
      },
      {
        img: "pic-2.png",
        title: "Noor",
        subtitle: "cpo on eran",
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, odio eius iusto omnis laboriosam architecto iste eum culpa neque, quae sit voluptatibus quis tempora iure rem expedita sed. Eveniet, consequuntur",
      },
   
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
