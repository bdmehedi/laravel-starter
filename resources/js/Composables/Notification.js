import Swal from "sweetalert2";

export function useNotification(duration = 3000) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: duration,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const notifySuccess = (title) => {
        Toast.fire({
            icon: 'success',
            title: title,
        })
    }

    const notifyWarning = (title) => {
        Toast.fire({
            icon: 'warning',
            title: title,
        })
    }

    const notifyError = (title) => {
        Toast.fire({
            icon: 'error',
            title: title,
        })
    }

    return {
        notifySuccess,
        notifyWarning,
        notifyError,
    }
}
