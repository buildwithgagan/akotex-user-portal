
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function ThemeToggle({ variant = "outline", size = "icon", className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={variant}
        size={size}
        onClick={() => setTheme("light")}
        className={cn(
          className,
          theme === "light" && "bg-accent text-accent-foreground"
        )}
      >
        <Sun className="h-4 w-4" />
      </Button>
      <Button
        variant={variant}
        size={size}
        onClick={() => setTheme("dark")}
        className={cn(
          className,
          theme === "dark" && "bg-accent text-accent-foreground"
        )}
      >
        <Moon className="h-4 w-4" />
      </Button>
    </div>
  );
}
