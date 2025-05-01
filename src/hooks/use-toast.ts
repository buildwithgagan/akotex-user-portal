
import { toast as sonnerToast } from "sonner";

type ToastProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive" | "success";
};

// Create a proper useToast hook that returns both toast function and toasts array
export function useToast() {
  return {
    toast: ({ title, description, action, variant = "default" }: ToastProps) => {
      // Map our variant to sonner's type
      let sonnerType: undefined | "success" | "error" | "warning" | "info";
      
      if (variant === "destructive") {
        sonnerType = "error";
      } else if (variant === "success") {
        sonnerType = "success";
      }
      
      return sonnerToast(title, {
        description,
        action,
        // Only include type if it's defined
        ...(sonnerType ? { type: sonnerType } : {})
      });
    }
  };
}

export { sonnerToast as toast };
