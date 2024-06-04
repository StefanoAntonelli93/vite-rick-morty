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
    // API call
    console.log('chiamata Api rick morty');
    axios.get(this.store.apiInfo.url + this.store.apiInfo.endpoints.characters).then((response) => {
      this.store.results = response.data;
      this.store.loading = false;
    });
  },
};
</script>

<template>

  <AppHeader />
  <SearchCharacter />
  <AppMain />
</template>

<style scoped></style>
