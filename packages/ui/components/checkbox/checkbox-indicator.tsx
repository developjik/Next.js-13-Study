"use client";

import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@repo/utils";

export type CheckboxIndicatorProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Indicator
>;

const CheckboxIndicator = ({
  className,
  children,
  ...props
}: CheckboxIndicatorProps) => (
  <CheckboxPrimitive.Indicator
    className={cn("flex items-center justify-center text-current", className)}
    {...props}
  >
    {children}
  </CheckboxPrimitive.Indicator>
);

CheckboxIndicator.displayName = CheckboxPrimitive.Indicator.displayName;

export { CheckboxIndicator };
