<script setup>

import Dashboard from "@/Layouts/Dashboard.vue";
import ContentsWithSidebar from "@/Layouts/Sections/ContentsWithSidebar.vue";
import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon
} from "@heroicons/vue/24/outline/index.js";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";

const navigations = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, count: '5', current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, count: '12', current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, count: '20+', current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
</script>

<template>
    <Dashboard>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Settings
            </h2>
        </template>
        <ContentsWithSidebar :navigations="navigations">
            <div class="bg-white p-6 lg:p-8 md:ml-5 rounded">
                <ApplicationLogo class="block h-12 w-auto" />

                <h1 class="mt-8 text-2xl font-medium text-gray-900 dark:text-white">
                    Welcome to your Jetstream application!
                </h1>

                <p class="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
                    Laravel Jetstream provides a beautiful, robust starting point for your next Laravel application. Laravel is designed
                    to help you build your application using a development environment that is simple, powerful, and enjoyable. We believe
                    you should love expressing your creativity through programming, so we have spent time carefully crafting the Laravel
                    ecosystem to be a breath of fresh air. We hope you love it.
                </p>
            </div>
            <div class="p-6 lg:p-8 md:ml-5 bg-white shadow mt-5 rounded">
                <p class="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
                    Laravel Jetstream provides a beautiful, robust starting point for your next Laravel application. Laravel is designed
                    to help you build your application using a development environment that is simple, powerful, and enjoyable. We believe
                    you should love expressing your creativity through programming, so we have spent time carefully crafting the Laravel
                    ecosystem to be a breath of fresh air. We hope you love it.
                </p>

                <p class="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
                    Laravel Jetstream provides a beautiful, robust starting point for your next Laravel application. Laravel is designed
                    to help you build your application using a development environment that is simple, powerful, and enjoyable. We believe
                    you should love expressing your creativity through programming, so we have spent time carefully crafting the Laravel
                    ecosystem to be a breath of fresh air. We hope you love it.
                </p>

                <p class="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
                    Laravel Jetstream provides a beautiful, robust starting point for your next Laravel application. Laravel is designed
                    to help you build your application using a development environment that is simple, powerful, and enjoyable. We believe
                    you should love expressing your creativity through programming, so we have spent time carefully crafting the Laravel
                    ecosystem to be a breath of fresh air. We hope you love it.
                </p>

                <p class="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
                    Laravel Jetstream provides a beautiful, robust starting point for your next Laravel application. Laravel is designed
                    to help you build your application using a development environment that is simple, powerful, and enjoyable. We believe
                    you should love expressing your creativity through programming, so we have spent time carefully crafting the Laravel
                    ecosystem to be a breath of fresh air. We hope you love it.
                </p>

                <p class="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
                    Laravel Jetstream provides a beautiful, robust starting point for your next Laravel application. Laravel is designed
                    to help you build your application using a development environment that is simple, powerful, and enjoyable. We believe
                    you should love expressing your creativity through programming, so we have spent time carefully crafting the Laravel
                    ecosystem to be a breath of fresh air. We hope you love it.
                </p>

                <p class="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
                    Laravel Jetstream provides a beautiful, robust starting point for your next Laravel application. Laravel is designed
                    to help you build your application using a development environment that is simple, powerful, and enjoyable. We believe
                    you should love expressing your creativity through programming, so we have spent time carefully crafting the Laravel
                    ecosystem to be a breath of fresh air. We hope you love it.
                </p>

                <p class="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
                    Laravel Jetstream provides a beautiful, robust starting point for your next Laravel application. Laravel is designed
                    to help you build your application using a development environment that is simple, powerful, and enjoyable. We believe
                    you should love expressing your creativity through programming, so we have spent time carefully crafting the Laravel
                    ecosystem to be a breath of fresh air. We hope you love it.
                </p>

                <p class="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
                    Laravel Jetstream provides a beautiful, robust starting point for your next Laravel application. Laravel is designed
                    to help you build your application using a development environment that is simple, powerful, and enjoyable. We believe
                    you should love expressing your creativity through programming, so we have spent time carefully crafting the Laravel
                    ecosystem to be a breath of fresh air. We hope you love it.
                </p>

                <p class="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
                    Laravel Jetstream provides a beautiful, robust starting point for your next Laravel application. Laravel is designed
                    to help you build your application using a development environment that is simple, powerful, and enjoyable. We believe
                    you should love expressing your creativity through programming, so we have spent time carefully crafting the Laravel
                    ecosystem to be a breath of fresh air. We hope you love it.
                </p>
            </div>
        </ContentsWithSidebar>
     </Dashboard>
</template>

<style scoped>

</style>
