<template>
  <v-app-bar app color="white" flat>
    <v-badge color="#D5F0DB" dot>
      <v-img src="1.png" contain width="30"></v-img>
    </v-badge>
    <v-toolbar-title class="ml-4">
      <span class="text-green"> e </span>
      <strong> Grocery </strong>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-badge color="#FF6D59" overlap content="2" class="mr-2 mt-1">
      <v-avatar color="#FFF0EE" size="40">
       
        <v-icon icon="fa:fas fa-heart" size="x-small" color="#FF6D59"></v-icon>
      </v-avatar>
    </v-badge>
    <v-badge color="#41AB55" overlap content="2" class="mr-2 mt-1">
      <v-avatar color="#ECF7EE" size="40">
       
        <v-icon icon="fa:fas fa-shopping-cart" size="x-small" color="#41AB55"></v-icon>
      </v-avatar>
    </v-badge>
    <span class="text-green d-none d-sm-flex"> Hello ,<strong>Jon</strong> </span>
    <v-avatar class="ml-2" size="30">
       
       <v-img src="1.png"></v-img>
     </v-avatar>
     <v-btn icon dark>
      <v-icon icon="fa:fas fa-chevron-down" size="x-small" color="#878A94"></v-icon>
     </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: "Nav_bar",

  data: () => ({}),
};
</script>
<style scoped>
.v-toolbar__title{
  font-size: 1rem !important;
}
</style>
