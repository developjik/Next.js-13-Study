import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React from "react";
import { cn } from "utils";

export type AccordionRootProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
>;

export type AccordionRootRefProps = React.ElementRef<
  typeof AccordionPrimitive.Root
>;

const AccordionRoot = React.forwardRef<
  AccordionRootRefProps,
  AccordionRootProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root ref={ref} className={cn("", className)} {...props} />
));

AccordionRoot.displayName = "AccordionRoot";

export { AccordionRoot };
