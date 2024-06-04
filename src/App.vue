<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
// // import store from store.js
import { store } from './store';
//  import axios from axios 
import axios from 'axios';

export default {
  name: 'AppRickandMorty',
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  created() {
    // API call
    console.log('chiamata Api rick morty');
    axios.get(this.store.apiUrl).then((response) => {
      this.store.results = response.data;
      this.store.loading = false;
    });
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>
