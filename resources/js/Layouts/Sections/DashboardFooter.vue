<template>
    <footer class="text-gray-700 py-4 text-center">
        <p>&copy; {{ currentYear }} Your Company Name. All rights reserved. | Powered by <a href="https://mehedihasan.im/" target="_blank" rel="noopener noreferrer">Mehedi</a></p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    },
    mounted() {
        this.currentYear = new Date().getFullYear();
    }
};
</script>

<style>
/* custom styles here */
</style>
