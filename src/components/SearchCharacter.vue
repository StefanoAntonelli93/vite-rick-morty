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
    methods: {
        getCharacterStatus() {
            axios.get(this.store.apiInfo.url + this.store.apiInfo.endpoints.characters).then((response) => {
                this.store.results = response.data;
            });
        },
    },
    created() {
        this.getCharacterStatus();
    },
};
</script>

<!-- html -->
<template>
    <div class="container">ricerca
        <!-- title -->
        <h1><a href="/">Rick and Morty App</a></h1>
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



<!-- scss -->
<style scoped lang="scss">
@use '../assets/js/scss/partials/_variables.scss' as *;

.container {
    color: $header-text-color;
    font-size: 30px;

    h1 {
        padding-bottom: 10px;
        color: $header-text-color;
        font-size: 50px;
    }

    img {
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
    }

    a {
        color: $header-text-color;
    }
}
</style>