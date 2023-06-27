<template>
    <ul
        class="subscriptionBenefits"
        v-for="(benefit, index) in benefits"
        :key="index">
        <benefit-item-component :benefit="benefit" />
    </ul>
</template>

<script setup lang="ts">
    import BenefitItemComponent from './BenefitItemComponent.vue'
    const benefits = [
        'Product discovery and building what matters',
        'Measuring to ensure updates are a success',
        'And much more!',
    ]
</script>

<style scoped lang="scss">
    .subscriptionBenefits {
        padding: 0 2rem;
    }
</style>
