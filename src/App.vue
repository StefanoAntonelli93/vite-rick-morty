<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import SearchCharacter from './components/SearchCharacter.vue';
// // import store from store.js
import { store } from './store';
//  import axios from axios 
import axios from 'axios';

export default {


  name: 'AppRickandMorty',


  methods: {
    getCharacter(searchText = '', status = '') {
      // definisco varibile url per semplificare sintassi
      let url = this.store.apiInfo.url + this.store.apiInfo.endpoints.characters;
      // creo oggetto params vuoto
      let params = {};

      if (searchText) {
        params.name = searchText;
      }
      if (status) {
        params.status = status;
      }


      // chiamata axios con params
      axios.get(url, { params })
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
  // methods: {
  //   getCharacter(searchText = '', status = '') {
  //     // creo varibile che definisce url della chiamata
  //     let url = this.store.apiInfo.url + this.store.apiInfo.endpoints.characters;
  //     if (searchText) {
  //       url += `?name=${searchText}`;

  //     }
  //     if (status) {
  //       url += searchText ? `&status=${status}` : `?status=${status}`;
  //     }
  //     axios.get(url).then((response) => {
  //       this.store.results = response.data;
  //       this.store.loading = false;

  //     });
  //   },
  // },

  components: {
    AppHeader,
    AppMain,
    SearchCharacter,
  },
  data() {
    return {
      store,
    }
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
</template>

<style scoped></style>
