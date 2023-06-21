<template>
    <section class="newsletterFormView">
        <div class="newsletterFormView__backNavigation">
            <router-link to="/">
                <span class="material-symbols-outlined">arrow_back</span>
            </router-link>
            Back to menu
        </div>
    </section>
</template>

<script lang="ts"></script>

<style scoped lang="scss">
    .newsletterFormView {
        height: 100dvh;
        width: 100dvw;
        &__backNavigation {
            @include flex-position(
                $justify: flex-start,
                $align-items: center,
                $gap: 0.5rem
            );
            margin: 1rem 1rem 0 1rem;
        }
        &__backNavigation > a {
            position: relative;
            top: 0.125rem;
        }
        &__backNavigation,
        &__backNavigation > a > span {
            font-size: $font-size--large;
            text-decoration: none;
        }
        &__backNavigation > a > span {
            font-weight: $font-weight-bold;
            cursor: pointer;
            transition: color 0.3s ease;
            &:visited {
                color: $text-color--dark-theme;
            }
            &:hover {
                color: $accent-color--secondary;
            }
        }
    }
</style>
