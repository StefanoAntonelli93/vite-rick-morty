<script>
// importo componente CharacterList
import CharacterList from './CharacterList.vue';
export default {
    name: 'AppMain',
    components: {
        // richiamo componente
        CharacterList,
    }
}

</script>



<template>
    <section>

        <div class="container">
            <div class="character">
                <!-- richiamo componente -->
                <CharacterList />
            </div>

        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    background-color: aquamarine;

    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        text-align: center;
        justify-content: space-between;
    }

    :deep(img) {
        width: 80%;
        border-radius: 180px;
    }


}
</style>