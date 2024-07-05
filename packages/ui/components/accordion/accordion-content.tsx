import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React from "react";
import { cn } from "utils";

export type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
>;

export type AccordionContentRefProps = React.ElementRef<
  typeof AccordionPrimitive.Content
>;

const AccordionContent = React.forwardRef<
  AccordionContentRefProps,
  AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "p-4 overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className,
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { AccordionContent };
