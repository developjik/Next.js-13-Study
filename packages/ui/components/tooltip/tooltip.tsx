"use client";

import {
  TooltipTriggerProps,
  TooltipContentProps,
  TooltipArrowProps,
  TooltipWrapperProps,
} from "./type";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import React from "react";
import { cn } from "utils";

const TooltipWrapper = ({
  delayDuration = 0,
  skipDelayDuration,
  disableHoverableContent,
  ...tooltipRootProps
}: TooltipWrapperProps) => {
  const tooltipProviderProps = {
    delayDuration,
    skipDelayDuration,
    disableHoverableContent,
  };

  return (
    <TooltipPrimitive.Provider {...tooltipProviderProps}>
      <TooltipPrimitive.Root {...tooltipRootProps} />
    </TooltipPrimitive.Provider>
  );
};

const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  TooltipTriggerProps
>(({ ...props }, ref) => <TooltipPrimitive.Trigger ref={ref} {...props} />);

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md",
      className,
    )}
    {...props}
  />
));

const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  TooltipArrowProps
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Arrow
    ref={ref}
    className={cn("z-50 fill-white shadow-md", className)}
    {...props}
  />
));

const Content = Object.assign(TooltipContent, {
  Arrow: TooltipArrow,
});

const Tooltip = Object.assign(TooltipWrapper, {
  Trigger: TooltipTrigger,
  Content,
});
export { Tooltip };
