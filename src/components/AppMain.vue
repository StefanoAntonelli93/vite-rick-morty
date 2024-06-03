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
            <div class="characters">
                <!-- richiamo componente -->
                <CharacterList />
            </div>

        </div>
    </section>
</template>

<style scoped lang="scss">
section {



    .characters {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        gap: 10px;

        :deep(.character) {
            width: calc(100% / 4 - 10px);
            margin-bottom: 40px;


            img {
                width: 100%;
                border-radius: 180px;
            }
        }


    }



}
</style>