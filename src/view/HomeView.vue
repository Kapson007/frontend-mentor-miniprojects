<template>
    <div class="homeWrapper">
        <header-component />
        <main class="homeWrapper__projects">
            <project-list-component />
        </main>
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

        &__projects {
            width: 100%;
        }
    }
</style>
