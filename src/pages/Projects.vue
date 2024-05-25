<template>
    <Navigation/>

    <div class="mx-auto max-w-7xl pt-6">
        <h1 class="text-4xl font-bold tracking-tight text-black">Nothing here yet..</h1>
        <h3 class="mt-6 text-gray-800">Still working on it</h3>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Navigation from "@/components/navigation/Navigation.vue";

export default defineComponent({
    name: "Projects",
    components: {Navigation}
})
</script>