"use client";

import React from "react"; 
import * as SwitchPrimitives from "@radix-ui/react-switch";

import {SwitchRoot} from './switch-root'
import {SwitchThumb} from './switch-thumb'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ ...props }, ref) => (
  <SwitchRoot  {...props} ref={ref}>   
    <SwitchThumb />
  </SwitchRoot>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
