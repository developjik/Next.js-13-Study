"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";
import { cn } from "utils";

const SliderRoot = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    {props?.children}
  </SliderPrimitive.Root>
));
SliderRoot.displayName = SliderPrimitive.Root.displayName;

export { SliderRoot };
