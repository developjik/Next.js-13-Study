import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@repo/utils";

export type CheckboxRootProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
>;

export type CheckboxRootRefProps = React.ElementRef<
  typeof CheckboxPrimitive.Root
>;

const CheckboxRoot = React.forwardRef<CheckboxRootRefProps, CheckboxRootProps>(
  ({ className, children, ...props }, ref) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
      {...props}
    >
      {children}
    </CheckboxPrimitive.Root>
  )
);

CheckboxRoot.displayName = CheckboxPrimitive.Root.displayName;

export { CheckboxRoot };
