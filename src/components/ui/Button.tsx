import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
    size?: "sm" | "md" | "lg" | "icon";
    asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                ref={ref}
                className={cn(
                    // Base
                    "inline-flex items-center justify-center font-bold tracking-wide transition-all cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none rounded-md shadow-sm",
                    "active:scale-[0.98]",

                    // Size
                    size === "sm" && "h-9 px-4 text-xs",
                    size === "md" && "h-11 px-6 text-sm",
                    size === "lg" && "h-14 px-8 text-base",
                    size === "icon" && "h-9 w-9",

                    // Variants - Professional/Clean
                    variant === "primary" && [
                        "bg-primary-blue text-white ring-offset-2 focus:ring-2 focus:ring-primary-blue",
                        "hover:bg-primary-blue/90 hover:shadow-md"
                    ],
                    variant === "secondary" && [
                        "bg-industrial-orange text-white",
                        "hover:bg-industrial-orange/90 hover:shadow-md"
                    ],
                    variant === "outline" && [
                        "bg-transparent text-slate-700 border border-slate-300 shadow-none",
                        "hover:bg-slate-50 hover:text-slate-900"
                    ],
                    variant === "ghost" && [
                        "bg-transparent text-slate-600 border-transparent shadow-none",
                        "hover:text-primary-blue hover:bg-slate-100"
                    ],
                    variant === "danger" && [
                        "bg-red-600 text-white border-transparent",
                        "hover:bg-red-700"
                    ],

                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
