<template>
    <header class="homeHeader">
        <h1>Welcome to page with my implemented projects</h1>
        <h2>
            Here you can find list of my implementations projects / components
            inspired by ideas from
            <a
                id="frontendProject"
                href="https://www.frontendmentor.io"
                >Frontend Mentor</a
            >
            Implementations can be quite different than on authors page but
            logically are the same. If you want rate or review projects please
            visit my repo on my
            <a href="https://github.com/Kapson007/frontend-mentor-miniprojects"
                >Github</a
            >.
        </h2>
    </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    .homeHeader {
        margin-top: $margin-normal;
        @include flex-position(column, space-around, center, 3rem);
        text-align: center;
        h2 {
            width: 100vmin;
            text-align: center;
        }
    }
</style>
