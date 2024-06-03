<script>
import CharacterList from './components/CharacterList.vue';
// // import store from store.js
// import { store } from './store';

export default {
  name: 'MyApp',
  components: {
    CharacterList,
  },
};
</script>

<template>
  <h1>Rick and Morty App</h1>
  <CharacterList />
</template>

<style scoped></style>
