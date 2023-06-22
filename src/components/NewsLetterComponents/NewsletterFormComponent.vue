<template>
    <section class="newsletterFormLayout">
        <div class="newsletterFormLayout__banner"></div>
        <div class="newsletterFormLayout__description description">
            <h1 class="description__title">Stay updated!</h1>
            <h6 class="description__advert">
                Join 60,000+ product managers receiving monthly updates on:
            </h6>
            <benefit-list-component />
        </div>
    </section>
</template>

<script setup lang="ts">
    import BenefitListComponent from './BenefitListComponent.vue'
</script>

<style scoped></style>
