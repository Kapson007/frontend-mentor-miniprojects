<template>
    <div class="homeWrapper">
        <header-component />
        <main class="projects"></main>
        <project-list-component />
    </div>
</template>

<script setup lang="ts">
    import HeaderComponent from '../components/HeaderComponent.vue'
    import ProjectListComponent from '../components/ProjectListComponent.vue'
</script>

<style scoped lang="scss">
    .homeWrapper {
        @include flex-position(column, space-evenly, center);
        height: 100dvh;
        width: 70dvw;
        padding-inline: $padding-normal;
    }
</style>
