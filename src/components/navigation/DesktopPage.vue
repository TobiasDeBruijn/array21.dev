<template>
    <StyledLink
        :page="page"
        :current="current"
        :current-style="currentStyle"
        :default-style="defaultStyle"
    />
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Page} from "@/components/navigation/navigation.ts";
import StyledLink from "@/components/navigation/StyledLink.vue";

export default defineComponent({
    name: "DesktopPage",
    components: {StyledLink},
    props: {
        page: {
            type: Object as PropType<Page>,
            requierd: true,
        },
        current: Boolean,
    },
    data() {
        return {
            currentStyle: "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium",
            defaultStyle: "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium",
        }
    }
})
</script>