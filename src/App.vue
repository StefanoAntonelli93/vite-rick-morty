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
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>
