<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import Banner from '@/Components/Banner.vue';
import DashboardFooter from "@/Layouts/Sections/DashboardFooter.vue";
import Navbar from "@/Layouts/Sections/Navbar.vue";

defineProps({
    title: String,
});

const logout = () => {
    router.post(route('logout'));
};
</script>

<template>
    <div class="relative overflow-hidden pb-1 bg-gray-100 max-h-full">
        <Head :title="title" />

        <Banner />

        <div>
            <Navbar/>

            <!-- Page Heading -->
            <header v-if="$slots.header" class="bg-white mt-16 shadow border-b">
                <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main class="overflow-auto bg-[#F3F4F6]">
                <slot />
            </main>
        </div>
    </div>
    <DashboardFooter/>

</template>
