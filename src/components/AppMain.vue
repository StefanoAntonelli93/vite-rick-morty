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
    <div class="container">
        <!-- richiamo componente -->
        <CharacterList />
    </div>
</template>