<!-- js -->
<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'SearchCharacter',
    data() {
        return {
            store,
        };
    },
    // creo metodo per chiamata api con axios
    methods: {
        getCharacterStatus() {
            axios.get(this.store.apiInfo.url + this.store.apiInfo.endpoints.characters).then((response) => {
                this.store.results = response.data;
            });
        },
    },
    // aggiungo metodo in fase created
    created() {
        this.getCharacterStatus();
    },
};
</script>

<!-- html -->
<template>
    <div class="container">

        <!-- placeholder -->
        <input type="text" placeholder="Search Character">
        <!-- select stauts -->
        <select id="status">
            <option value="status" selected>Select status</option>
        </select>
        <!-- button -->
        <button><a href=""></a>Search</button>
        <button><a href=""></a>Reset</button>
    </div>
</template>


<style scoped lang="scss">
.container {
    text-align: center;
}
</style>