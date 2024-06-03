<script>
export default {
    name: 'AppHeader',
}
</script>


<template>
    <header>

        <div class="container">
            <h1>Rick and Morty App</h1>
            <input type="text" placeholder="Search Character">
            <button><a href=""></a>Search</button>
            <button><a href=""></a>Reset</button>

        </div>
    </header>
</template>


<style scoped lang="scss">
@use '../assets/js/scss/partials/_variables.scss' as *;

header {
    background-color: $header-color;

}
</style>