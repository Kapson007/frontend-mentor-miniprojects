<template>
    <section class="newsletterFormView">
        <div class="newsletterFormView__backNavigation">
            <span class="material-symbols-outlined">arrow_back</span>
            Back to menu
        </div>
    </section>
</template>

<script lang="ts"></script>

<style scoped lang="scss">
    .newsletterFormView {
        border: 2px solid red;
        height: 100dvh;
        width: 100dvw;
        &__backNavigation {
            border: 2px solid #d6cc1a;
            @include flex-position(
                $justify: flex-start,
                $align-items: center,
                $gap: 0.5rem
            );
            margin: 1rem 1rem 0 1rem;
        }
    }
</style>
