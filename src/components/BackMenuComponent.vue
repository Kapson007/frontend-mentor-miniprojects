<template>
    <div class="backNavigation">
        <router-link to="/">
            <span class="material-symbols-outlined">arrow_back</span>
        </router-link>
        Back to menu
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    @use 'src/styles/newsletterFormStyles/newsletterForm-index' as newsletter;
    .backNavigation {
        @include flex-position(
            $justify: flex-start,
            $align-items: center,
            $gap: 0.5rem
        );
        margin: 1rem 1rem 0 1rem;
        @include header-style(2.25rem, $text-color--dark-theme, 600, 0.03rem);
        & > a {
            position: relative;
            top: 0.125rem;
        }
        &,
        & > a > span {
            font-size: $font-size--large;
            text-decoration: none;
        }
        & > a > span {
            font-weight: $font-weight-bold;
            cursor: pointer;
            transition: color 0.3s ease;
            color: $text-color--dark-theme;
            &:visited {
                color: $text-color--dark-theme;
            }
            &:hover {
                color: $accent-color--secondary;
            }
        }
    }
</style>
