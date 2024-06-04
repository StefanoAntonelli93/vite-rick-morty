<script>
import { store } from '../store';
export default {
    name: 'SearchCharacter',
    data() {
        return {
            store,
            searchText: '',
        };
    },
    methods: {
        resetSearch() {
            this.searchText = '';
            this.$emit('search', '');
        },
    },
};
</script>

<template>
    <div class="container">
        <input type="text" placeholder="Search Character" v-model="searchText" @input="$emit('search', searchText)">
        <select id="status">
            <option value="status" selected>Select status</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
        </select>
        <button>Search</button>
        <button @click="resetSearch()">Reset</button>
    </div>
</template>

<style scoped lang="scss">
.container {
    text-align: center;
}
</style>