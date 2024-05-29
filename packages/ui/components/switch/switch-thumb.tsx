"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@repo/utils";

const SwitchThumb = () => (
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
)
SwitchThumb.displayName = SwitchPrimitives.Thumb.displayName;

export { SwitchThumb };