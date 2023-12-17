<script setup>
import {onMounted, onUnmounted, ref} from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import {
    ArrowPathIcon,
    Bars3Icon,
    CloudArrowUpIcon,
    FingerPrintIcon,
    LockClosedIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import { CheckIcon } from '@heroicons/vue/20/solid'
import Footer from "@/Layouts/Sections/Footer.vue";
import {Link, router, Head} from "@inertiajs/vue3";
import Header from "@/Layouts/Sections/Header.vue";


</script>

<template>
    <Head title="Madaris info" />
    <div class="bg-white">
        <!-- Header -->
        <Header/>

        <main class="isolate">
            <slot></slot>
        </main>

        <!-- Footer -->
        <div class="mx-auto mt-32 w-full">
            <Footer/>
        </div>
    </div>
</template>
