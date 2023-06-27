<template>
    <header class="homeHeader">
        <h1 class="homeHeader__title">Welcome to page with my&nbsp;projects</h1>
        <h2 class="homeHeader__description">
            Here you can find list of my projects
            implementations&nbsp;/&nbsp;components inspired by ideas from
            <a
                class="homeHeader__link"
                href="https://www.frontendmentor.io"
                >Frontend Mentor</a
            >
            Implementations can be quite different than on authors page but
            logically are the same. If you want rate or review projects please
            visit my repo on my
            <a
                class="homeHeader__link"
                href="https://github.com/Kapson007/frontend-mentor-miniprojects"
                >Github</a
            >.
        </h2>
    </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    @use '../styles/newsletterFormStyles/_newsletterForm-index' as *;
    .homeHeader {
        width: 100%;
        @include flex-position(column, space-around, center, 1.8rem);
        &__title {
            text-align: center;
            line-height: 1.2;
        }
        &__description {
            font-size: $font-size--base;
            letter-spacing: 0.09rem;
            line-height: 1.5;
        }
        &__link {
            transition: all 0.1s ease;
            &:hover {
                color: $text-color;
                background-color: $accent-color--secondary;
                border-radius: $border-radius;
            }
            &:focus-visible,
            &:focus {
                @include outline($width: $border-width--thin, $offset: 0.2rem);
            }
        }
        @media screen and (min-width: $tablet-breakpoint) {
            &__title {
                font-size: 2.5rem;
            }
            &__description {
                font-size: $font-size--medium;
                letter-spacing: 0.1rem;
            }
        }
    }
</style>
