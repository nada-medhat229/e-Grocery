<template>
  <v-app>
    <Navbar/>
    <v-container fluid>
      
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";
import Navbar from "../components/Nav_bar.vue";
// Components

export default defineComponent({
  name: "HomeView",
  setup() {
    return {
     
    };
  },
  components: {
    Navbar
  },
});
</script>
<style scoped>
</style>
