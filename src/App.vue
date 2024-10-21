<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import SearchCharacter from "./components/SearchCharacter.vue";
// // import store from store.js
import { store } from "./store";
//  import axios from axios
import axios from "axios";

export default {
  name: "AppRickandMorty",

  methods: {
    getCharacter(searchText = "", status = "") {
      // definisco varibile url per semplificare sintassi
      let url =
        this.store.apiInfo.url + this.store.apiInfo.endpoints.characters;
      // creo oggetto params vuoto
      let params = {};

      if (searchText) {
        params.name = searchText;
      }
      if (status) {
        params.status = status;
      }

      // chiamata axios con params
      axios
        .get(url, { params })
        .then((response) => {
          this.store.results = response.data;
          this.store.loading = false;
        })
        // verifico che non ci siano errori
        .catch((error) => {
          console.error("An error occurred:", error);
          this.store.loading = false;
        });
    },
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
    SearchCharacter,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    this.getCharacter();
  },
};
</script>

<template>
  <AppHeader />
  <!-- EMIT invoca dentro chi chiama -->
  <SearchCharacter @search="getCharacter" />
  <AppMain />
  <AppFooter />
</template>

<style scoped></style>
