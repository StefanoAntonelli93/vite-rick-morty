<script>
export default {
    name: "CharacterElement",
    // chiave props
    props: ['image', 'name', 'status', 'species'],
}
</script>

<template>
    <div>
        <img :src="image" :alt="name">
        <h3> {{ name }}</h3>
        <p>{{ status }}</p>
        <p>{{ species }}</p>
    </div>
</template>