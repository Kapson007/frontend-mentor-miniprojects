<template>
    <form
        action=""
        class="newsletterForm">
        <div class="newsletterForm__formAction formAction">
            <label
                for="emailField"
                class="formAction__inputLabel"
                >Email address</label
            >
            <input
                id="emailField"
                class="formAction__inputField"
                type="email"
                placeholder="email@company.com"
                required />
        </div>
        <button
            class="newsletterForm__submit"
            type="submit">
            Subscribe to monthly newsletter
        </button>
    </form>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    @use '/src/styles/newsletterFormStyles/newsletterForm-index' as newsletter;
    .newsletterForm {
        width: 100%;
        height: 100%;
        @include flex-position(column, center, center, 1.5rem);
        .formAction {
            @include flex-position(column, center, flex-start, 0.5rem);
            width: 100%;
            &__inputLabel {
                @include header-style(
                    0.9rem,
                    newsletter.$charcoal-grey,
                    600,
                    0rem
                );
            }
            &__inputField {
                box-sizing: border-box;
                display: inline-block;
                width: 100%;
                height: 3.5rem;
                padding: 0.75rem;
                color: newsletter.$charcoal-grey;
                border: solid $border-width--thin newsletter.$grey--light;
                border-radius: $border-radius;

                &::placeholder {
                    color: newsletter.$grey;
                    font-weight: 500;
                    letter-spacing: 0.05rem;
                }
            }
        }
        &__submit {
            width: 100%;
        }
    }
</style>
