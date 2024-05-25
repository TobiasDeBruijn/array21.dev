<template>
    <Navigation></Navigation>
    <div class="w-full h-screen mx-auto pt-20 pb-60" id="main-banner">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Array21 Development</h1>
                <h2 class="mt-6 text-3xl leading-8 text-gray-300">Just a hobby project</h2>

                <p class="text-white mt-20 text-lg">
                    Array21 is the name I use for a variety of hobby projects.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Navigation from '@/components/navigation/Navigation.vue';
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Home",
    components: {Navigation}
})
</script>

<style>
#main-banner {
    background: rgb(3,0,45);
    background: linear-gradient(90deg, rgba(3,0,45,1) 35%, rgba(0,74,173,1) 100%);
}
</style>