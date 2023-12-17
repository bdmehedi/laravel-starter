<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';


defineProps({
    contentWide: String,
})
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <slot name="header">
                <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            </slot>
        </template>

        <div class="pb-3 md:pb-10 max-h-screen">
            <div class="mx-auto sm:px-6 lg:px-8" :class="contentWide ?? 'max-w-full'">
                <div class="max-h-screen">
                    <slot>
                        <slot name="card-header" />
                        <div class="p-6 lg:p-8">
                            <slot name="card-content" />
                        </div>
                    </slot>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
