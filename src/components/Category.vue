<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-item-group mandatory class="mt-n1">
      <v-container>
        <v-row justify="center" class="space">
          <v-col
            cols="12"
            xs="12"
            sm="2"
            v-for="(category, i) in categories"
            :key="i"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'D5F0DB' : 'white' "
                :class="active ? 'borderme' : 'borderout'"
                class="d-flex align-center rounded-lg mx-2"
                dark
                height="100"
                flat
                @click="toggle"
              >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list three-line class="text-center">
                    <v-list-item>
                      <div align="center" justify="center">
                        <v-img :src="category.img" max-height="60" max-width="80" contain>

                        </v-img>
                      </div>
                      <v-list-item-subtitle 
                      :class="active?'text-green':'text-black'"
                      class="caption ">
                        {{ category.title }}
                      </v-list-item-subtitle>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>
<script>
export default {
  data: () => ({
    categories: [{ img: "1.jpg", title: "meat&fish" },
    { img: "2.jpg", title: "vegetables" },
    { img: "3.jpg", title: "medicien" },
    { img: "4.jpg", title: "baby" },
    { img: "5.jpg", title: "office" },
    { img: "6.jpg", title: "beauty" },

  ],
  }),
};
</script>
<style lang=""></style>
