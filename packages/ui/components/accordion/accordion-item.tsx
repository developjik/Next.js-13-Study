import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@repo/utils";

export type AccordionItemProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>;

export type AccordionItemRefProps = React.ElementRef<
  typeof AccordionPrimitive.Item
>;

const AccordionItem = React.forwardRef<
  AccordionItemRefProps,
  AccordionItemProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

export { AccordionItem };
