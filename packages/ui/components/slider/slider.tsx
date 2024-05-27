"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { SliderRoot } from "./slider-root";
import { SliderTrack } from "./slider-track";
import { SliderThumb } from "./slider-thumb";
import { SliderRange } from "./slider-range";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ ...props }, ref) => (
  <SliderRoot ref={ref} {...props}>
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb />
  </SliderRoot>
));

export { Slider };
