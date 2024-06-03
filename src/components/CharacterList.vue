<script>
// importo store
import { store } from '../store';
export default {
    name: "CharacterList",
    data() {
        return {
            store,
        }
    },
};

</script>




<template>

    <ul>
        <!-- itero con ciclo v-for per ogni character mostro images, nome, status, species-->
        <li v-for="(character, index) in store.results.results" :key="index">
            <img :src="character.image" :alt="character.name">
            <h3> {{ character.name }}</h3>
            <p>{{ character.status }}</p>
            <p>{{ character.species }}</p>
        </li>
    </ul>

</template>