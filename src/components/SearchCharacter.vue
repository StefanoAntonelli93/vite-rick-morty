<script>
import { store } from '../store';
export default {
    name: 'SearchCharacter',
    data() {
        return {
            store,
            searchText: '',
            status: '',
        };
    },
    methods: {
        emitSearch() {
            this.$emit('search', this.searchText, this.status);
        },
        resetSearch() {
            this.searchText = '';
            this.status = '';
            this.$emit('search', '', '');
        },
    },
};
</script>

<template>
    <div class="container">
        <input type="text" placeholder="Search Character" v-model="searchText" @input=emitSearch()>
        <select id="status" v-model="status">
            <option value="" selected>Select status</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
        </select>
        <button @click="emitSearch()">Search</button>
        <button @click="resetSearch()">Reset</button>
    </div>
</template>

<style scoped lang="scss">
.container {
    text-align: center;
}
</style>