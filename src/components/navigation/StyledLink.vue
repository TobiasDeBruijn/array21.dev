<template>
    <router-link
        v-if="!page?.external"
        :to="page.path"
        :class="current ? currentStyle : defaultStyle"
        :aria-current="current ? 'page' : null">
        {{ page.name }}
    </router-link>
    <a
        v-else
        :href="page.path"
        target="_blank"
        :class="defaultStyle + ' flex flex-row'">
        {{ page.name }}
        <OpenInNew class="ml-1" :size="20"></OpenInNew>
    </a>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import OpenInNew from "vue-material-design-icons/OpenInNew.vue";
import {Page} from "@/components/navigation/navigation.ts";

export default defineComponent({
    name: "StyledLink",
    components: {OpenInNew},
    props: {
        page: {
            type: Object as PropType<Page>,
            requierd: true,
        },
        current: Boolean,
        defaultStyle: String,
        currentStyle: String,
    },
})
</script>