<template>
    <li class="benefitList__benefitBulletPoint">{{ benefit }}</li>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue'

    defineProps({ benefit: { type: String, required: true } })
</script>

<style scoped lang="scss"></style>
