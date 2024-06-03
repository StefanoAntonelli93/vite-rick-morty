<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
// // import store from store.js
// import { store } from './store';

export default {
  name: 'App Rick and Morty',
  components: {
    AppHeader,
    AppMain,
  },
  created() {
    console.log('chiamata Api rick morty');
  }
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>
