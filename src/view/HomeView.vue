<template>
    <div class="home">
        <header-component />
        <main class="projects"></main>
    </div>
</template>

<script setup lang="ts">
    import HeaderComponent from '../components/HeaderComponent.vue'
</script>

<style scoped lang="scss">
    .home {
        @include flex-position(column, space-evenly, center);
        height: 100dvh;
        padding-inline: $padding-normal;
    }
</style>
