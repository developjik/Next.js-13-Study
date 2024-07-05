import { ButtonStyle } from "./style";
import { ButtonProps } from "./type";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { cn } from "utils";

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
