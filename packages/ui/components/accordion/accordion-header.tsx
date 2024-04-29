import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@repo/utils";

export type AccordionHeaderProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Header
>;

export type AccordionHeaderRefProps = React.ElementRef<
  typeof AccordionPrimitive.Header
>;

const AccordionHeader = React.forwardRef<
  AccordionHeaderRefProps,
  AccordionHeaderProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header
    ref={ref}
    className={cn("border", className)}
    {...props}
  >
    {children}
  </AccordionPrimitive.Header>
));

AccordionHeader.displayName = AccordionPrimitive.Header.displayName;

export { AccordionHeader };
