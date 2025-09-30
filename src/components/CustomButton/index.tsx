//poderia ser com interface mas vamos fazer agora de outra maneira existe tbm o type e a class / a class e a interface são como funções mas a type é como uma variável

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
    "rounded-lg text-lg font-medium transition-all duration-300 ease-in-out flex items-center justify-center",
    {
        variants: {
            variant: {
                primary: "bg-gradient-to-r from-[#5593f7] to-[#1d4fd7] hover:shadow-xl hover:shadow-[#4896ff26] text-[#1f1f1f]",
                outline: "border border-[#2c313a]/50 bg-[#111418] h-[45px] text-[#F1F2F3] gap-4",
                ghost: "bg-transparent text-[#F1F2F3]",
                secondary: "bg-[#21252b] text-[#F1F2F3] hover:bg-[#21252b]/80",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

export interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    width?: string;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
    ({ className, variant, width, children, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, className }), width)}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
);
CustomButton.displayName = "CustomButton";

export default CustomButton;


// CÓDIGO ANTIGO:
// type CustomButtonProps = {
//     variant?: "primary" | "outline" | "ghost" | "secondary";
//     type?: "button" | "submit" | "reset";
//     className?: string;
//     children: React.ReactNode;
//     width?: string;
//     onClick?: () => void;
//     disabled?: boolean;
// };

// export default function CustomButton({
//     variant = "primary",
//     type = "button",
//     className,
//     children,
//     width = "w-full",
//     onClick,
//     disabled
// }: CustomButtonProps) {
//     function getStyles() {
//         switch (variant) {
//             case "primary":
//                 return `bg-gradient-to-r from-[#5593f7] to-[#1d4fd7] hover:shadow-xl
//                         hover:shadow-[#4896ff26] transition-all duration-300 ease-in-out
//                         cursor-pointer text-[#1f1f1f]`
//             case "outline":
//                 return `border border-[#2c313a]/50 rounded-xl
//                         bg-[#111418] h-[45px] text-[#F1F2F3] flex items-center
//                         justify-center gap-4 transition-all duration-300 ease-in-out cursor-pointer`
//             case "ghost":
//                 return `bg-transparent text-[#F1F2F3] flex items-center justify-center`
//             case "secondary":
//                 return "bg-[#21252b] text-[#F1F2F3] hover:bg-[#21252b]/80"
//             default:
//                 return ""
//         }
//     }

//     return (
//         <button
//             type={type}
//             onClick={onClick}
//             disabled={disabled}
//             className={
//                 cn(
//                     width,
//                     "rounded-lg text-lg font-medium cursor-pointer",
//                     getStyles(),
//                     className
//                 )
//             }
//         >
//             {children}
//         </button>
//     )
// }
