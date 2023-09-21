<template>
  <v-app-bar app color="white" flat>
    <v-badge color="#D5F0DB" dot>
      <v-img src="1.png" contain width="30"></v-img>
    </v-badge>
    <v-toolbar-title class="ml-4">
      <span class="green--text"> e </span>
      <strong> Grocery </strong>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-badge color="#FF6D59" overlap content="2" class="mr-2 mt-1">
      <v-avatar color="#FFF0EE" size="4">

      </v-avatar>
    </v-badge>
  </v-app-bar>
</template>
<script>
export default {
  name: "Nav_bar",

  data: () => ({}),
};
</script>
<style scoped></style>
