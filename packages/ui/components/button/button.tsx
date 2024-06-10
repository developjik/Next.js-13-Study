import { ButtonStyle } from "./style";
import { ButtonProps } from "./type";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@repo/utils";
import React from "react";

const Button: React.JSX = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(ButtonStyle({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
