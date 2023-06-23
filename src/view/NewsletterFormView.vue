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
    @use 'src/styles/newsletterFormStyles/newsletterForm-index' as newsletter;
    .newsletterFormView {
        height: 100dvh;
        @include flex-position(column, flex-start, flex-start, 1rem);
    }
</style>
