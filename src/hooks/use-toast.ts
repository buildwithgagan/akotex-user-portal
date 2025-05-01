
import { toast as sonnerToast } from "sonner";

type ToastProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive" | "success";
};

export function toast({ title, description, action, variant = "default" }: ToastProps) {
  const variantToTypeMap = {
    default: undefined,
    destructive: "error",
    success: "success",
  };

  return sonnerToast(title, {
    description,
    action,
    type: variantToTypeMap[variant],
  });
}

export const useToast = () => {
  return { toast };
};
