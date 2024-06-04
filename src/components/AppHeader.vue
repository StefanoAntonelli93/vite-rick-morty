<script>
// importo SearchCharacter
import SearchCharacter from './SearchCharacter.vue';
export default {
    name: 'AppHeader',
    components: {
        SearchCharacter,
    },
};
</script>


<template>
    <header>
        <div class="overlay">

            <div class="container">
                <SearchCharacter />


            </div>

        </div>
    </header>
</template>




<!-- css -->
<style scoped lang="scss">
@use '../assets/js/scss/partials/_variables.scss' as *;

header {
    position: relative;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    background-image: url('/images/space1.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }




}
</style>