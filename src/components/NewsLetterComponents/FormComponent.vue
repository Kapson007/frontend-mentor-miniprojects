<template>
    <form
        action=""
        class="newsletterForm">
        <div class="newsletterForm__formAction formAction">
            <div class="actionLabel">
                <label
                    for="emailField"
                    class="formAction__inputLabel"
                    >Email address</label
                >
                <span
                    v-show="showErrorMessage"
                    :class="{ error: showErrorMessage }"
                    class="formAction__errorMessage"
                    >Valid email required</span
                >
            </div>

            <input
                v-model="userMail"
                id="emailField"
                class="formAction__inputField"
                :class="{ error: showErrorMessage }"
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

<script setup lang="ts">
    import { computed, ref } from 'vue'

    // due to problems with regexp and eslint I had to solve it simpler
    // const emailRegex: RegExp = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");

    const userMail = ref('')
    const showErrorMessage = computed(
        () => userMail.value.length > 12 && !userMail.value.includes('@gmail')
    )
</script>

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
            &__errorMessage {
                @include header-style(0.7rem, $error-message, 600, 0rem);
            }
            &__inputField {
                box-sizing: border-box;
                display: inline-block;
                color: newsletter.$charcoal-grey;
                border: solid $border-width--thin newsletter.$grey--light;

                &::placeholder {
                    color: newsletter.$grey;
                    font-weight: 500;
                    letter-spacing: 0.05rem;
                }
            }
            .actionLabel {
                width: 100%;
                @include flex-position(row, space-between, center);
            }
        }
        &__submit,
        .formAction__inputField {
            width: 100%;
            height: 3.5rem;
            padding: 0.75rem;
            border-radius: $border-radius;
            font-size: 0.9rem;
            &.error {
                color: $error-message;
                background-color: #fcd9dc;
                border-color: $error-message;
            }
        }
        &__submit {
            width: 100%;
            background-color: newsletter.$dark-slate-grey;
            color: newsletter.$white;
            font-weight: 600;
            letter-spacing: 0.02rem;
            transition: all 0.2s ease;

            &:active,
            &:focus-visible,
            &:hover {
                background: linear-gradient(
                    to right,
                    newsletter.$primary-pink 5%,
                    newsletter.$primary-tomato-red,
                    newsletter.$primary-tomato-red
                );
                border: none;
                box-shadow: 0 0.5rem 1.5rem
                    lighten(newsletter.$primary-tomato-red, 20%);
            }
            &:focus {
                @include outline($outline-radius: $border-radius);
            }
        }
    }
</style>
