<template>
    <li class="benefitList__benefitBulletPoint">{{ benefit }}</li>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue'
    defineProps({ benefit: { type: String, required: true } })
</script>

<style scoped lang="scss">
    @use '/src/styles/newsletterFormStyles/newsletterForm-index' as newsletter;
    .benefitList__benefitBulletPoint {
        color: newsletter.$charcoal-grey;
        font-size: 0.9rem;
        line-height: 1.2;
        &::before {
            content: url('/newsletterFormAssets/icon-list.svg');
            position: absolute;
            left: 8%;
        }
    }
</style>
