<template>
    <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-2 lg:px-2 xl:ml-2">
            <div class="relative flex h-16 items-center justify-between">
                <!-- Button for mobile -->
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button
                        type="button"
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
                        @click="navShown = !navShown">
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Open main menu</span>
                        <!--
                          Icon when menu is closed.

                          Menu open: "hidden", Menu closed: "block"
                        -->
                        <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <!--
                          Icon when menu is open.

                          Menu open: "block", Menu closed: "hidden"
                        -->
                        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                    <!-- Icon -->
                    <div class="flex flex-shrink-0 items-center">
                        <img class="h-8 w-auto" src="@/assets/logo.png" alt="Your Company">
                    </div>

                    <!-- Pages, hidden on mobile -->
                    <div class="hidden sm:ml-2 sm:block">
                        <div class="flex space-x-4">
                            <DesktopPage
                                v-for="page in pages"
                                :page="page"
                                :current="isCurrent(page.path)"
                            ></DesktopPage>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu" v-if="navShown" >
            <div class="space-y-1 px-2 pb-3 pt-2">
                <MobilePage
                    v-for="page in pages"
                    :page="page"
                    :current="isCurrent(page.path)"
                ></MobilePage>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import DesktopPage from "@/components/navigation/DesktopPage.vue";
import MobilePage from "@/components/navigation/MobilePage.vue";
import {Page, PAGES} from "@/components/navigation/navigation.ts";

interface Data {
    /** If the mobile navigation UI is shown */
    navShown: boolean,
    /** Pages to show in the navigation bar */
    pages: Page[]
}

export default defineComponent({
    name: "navigation",
    components: {MobilePage, DesktopPage},
    data(): Data {
        return {
            navShown: false,
            pages: PAGES
        }
    },
    methods: {
        isCurrent(path: String): boolean {
            return this.$route.path === path;
        }
    }
})
</script>