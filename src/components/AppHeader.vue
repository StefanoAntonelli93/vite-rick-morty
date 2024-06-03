<script>
export default {
    name: 'AppHeader',
}
</script>


<template>
    <header>
        <div class="overlay">

            <div class="container">

                <h1>Rick and Morty App</h1>
                <input type="text" placeholder="Search Character">
                <button><a href=""></a>Search</button>
                <button><a href=""></a>Reset</button>

            </div>

        </div>
    </header>
</template>


<style scoped lang="scss">
@use '../assets/js/scss/partials/_variables.scss' as *;

header {
    position: relative;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    background-image: url('/public/images/space1.png');
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

}
</style>