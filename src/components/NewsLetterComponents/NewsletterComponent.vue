<template>
    <section class="newsletterFormLayout">
        <img
            class="newsletterFormLayout__banner"
            src="/newsletterFormAssets/illustration-sign-up-mobile.svg" />
        <div class="newsletterFormLayout__description description">
            <h1 class="description__title">Stay updated!</h1>
            <h6 class="description__advert">
                Join 60,000+ product managers receiving monthly updates on:
            </h6>
            <benefit-list-component />
            <form-component />
        </div>
    </section>
</template>

<script setup lang="ts">
    import BenefitListComponent from './BenefitListComponent.vue'
    import FormComponent from './FormComponent.vue'
</script>

<style scoped lang="scss">
    @use 'src/styles/newsletterFormStyles/_newsletterForm-index' as newsletter;
    .newsletterFormLayout {
        background-color: newsletter.$white;
        height: 100%;
        &__banner {
            width: 100%;
        }

        &__description {
            margin-top: 3rem;
            @include flex-position(column, space-evenly, flex-start, 1rem);
            height: 50%;
            padding: 0 2rem;

            .description {
                position: relative;
                &__title {
                    @include header-style(
                        2.25rem,
                        newsletter.$dark-slate-grey,
                        700,
                        0.03rem
                    );
                }
                &__advert {
                    color: newsletter.$charcoal-grey;
                    line-height: 1.5;
                }
            }
        }
    }
</style>
