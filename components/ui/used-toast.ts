import { toast as sonnerToast, ToastT, Toaster } from "sonner"

type ToastProps = Omit<ToastT, "id">

const toast = (props: ToastProps) => {
  sonnerToast(props.title, {
    description: props.description,
  })
}

const useToast = () => {
  return {
    toast,
    dismiss: sonnerToast.dismiss,
    error: sonnerToast.error,
    success: sonnerToast.success,
  }
}

export { useToast, toast, Toaster }