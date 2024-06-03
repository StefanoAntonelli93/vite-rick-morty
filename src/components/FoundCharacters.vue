<script>
import { store } from '../store';
export default {
    name: "FoundCharacters",
    data() {
        return {
            store,
        }
    },

}

</script>



<template>
    <div class="container">
        <!-- cerco numero totale di personaggi trovati  -->
        <h2>{{ store.results.results.length }} personaggi trovati</h2>
    </div>

</template>


<style scoped>
.container {
    text-align: center;
}
</style>