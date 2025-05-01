
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

// We're not using the toasts array from useToast, as we're using Sonner instead
// This component is now only used for the shadcn toast UI, not for managing toasts
export function Toaster() {
  return (
    <ToastProvider>
      <ToastViewport />
    </ToastProvider>
  )
}
