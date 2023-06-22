<template>
    <section class="newsletterFormView">
        <back-menu-component />
        <newsletter-form-component />
    </section>
</template>

<script setup lang="ts">
    import BackMenuComponent from '../components/BackMenuComponent.vue'
    import NewsletterFormComponent from '../components/NewsLetterComponents/NewsletterFormComponent.vue'
</script>

<style scoped lang="scss">
    .newsletterFormView {
        height: 100dvh;
        width: 100dvw;
    }
</style>
