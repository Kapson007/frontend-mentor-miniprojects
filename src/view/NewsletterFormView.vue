<template>
    <section class="newsletterFormView">
        <back-menu-component />
    </section>
</template>

<script lang="ts">
    import BackMenuComponent from '../components/BackMenuComponent.vue'
    export default {
        components: { BackMenuComponent },
    }
</script>

<style scoped lang="scss">
    .newsletterFormView {
        height: 100dvh;
        width: 100dvw;
    }
</style>
