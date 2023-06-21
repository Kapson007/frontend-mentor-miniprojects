<template>
    <section class="project-list">
        <h3 class="project-list__header">List of Projects:</h3>
        <ul class="project-list__list">
            <li
                class="project-item"
                tabindex="0">
                <router-link to="/newsletter-form">Newsletter Form</router-link>
            </li>
        </ul>
    </section>
</template>

<script lang="ts"></script>

<style scoped lang="scss">
    .project-list {
        height: 50dvh;

        width: 100%;
        @include flex-position(column, flex-start, flex-start, 2rem);
        &__header {
            font-size: 2rem;
        }
        &__list {
            list-style-position: inside;
            list-style-type: none;
            font-size: $font-size--medium;
            .project-item {
                transition: all 0.1s ease;
                a:visited {
                    color: $text-color--dark-theme;
                }

                &:focus-visible,
                &:focus {
                    @include outline($outline-radius: 0.625rem);
                }

                &::before {
                    content: '>';
                    color: $accent-color--secondary;
                    font-size: inherit;
                    font-weight: $font-weight-bold;
                    margin-right: $padding-normal;
                }
                &::marker {
                    //content: ">";
                    //color: $accent-color--secondary;
                    //font-size: inherit;
                    //font-weight: $font-weight-bold;
                    //margin-right: $padding-normal;
                }
            }
        }
    }
</style>
