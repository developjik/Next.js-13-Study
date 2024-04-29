"use client";

import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@repo/utils";

export type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
>;

export type AccordionTriggerRefProps = React.ElementRef<
  typeof AccordionPrimitive.Trigger
>;

const AccordionTrigger = React.forwardRef<
  AccordionTriggerRefProps,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Trigger
    ref={ref}
    className={cn(
      "p-4 transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Trigger>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export { AccordionTrigger };
