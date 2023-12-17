<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Sidebar from "@/Layouts/Sections/Sidebar.vue";

defineProps({
    navigations: {
        type: Array,
        required: true,
    },
})
</script>

<template>
    <div class="flex">
        <div class="max-w-[20%] pt-3 md:pt-5 max-h-screen overflow-y-auto overscroll-y-contain">
            <Sidebar :navigations="navigations" class="hidden md:block"/>
        </div>
        <div class="flex-1 max-h-screen bg-gray-100 pt-3 overflow-y-auto overscroll-y-auto md:pt-5">
            <slot/>
        </div>
    </div>
</template>
