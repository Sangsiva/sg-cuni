import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "whatsapp" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-gold/30 disabled:opacity-50";

    const variants = {
      primary: "bg-navy text-white hover:bg-navy-light hover:scale-[1.02]",
      secondary:
        "border border-navy text-navy hover:bg-navy hover:text-white",
      whatsapp: "bg-whatsapp text-white hover:bg-[#1ebe57]",
      ghost: "text-navy hover:text-gold underline-offset-4",
      gold: "bg-gold text-navy hover:bg-gold-light",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-3.5 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
