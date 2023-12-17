import {onMounted, onUnmounted, ref} from "vue"

export function useStickyMenuFunction(scrollLength = 3) {
    const isScrolling = ref(false)
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > scrollLength) {
            isScrolling.value = true;
        } else {
            isScrolling.value = false
        }
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    })

    return {
        isScrolling,
    }
}
