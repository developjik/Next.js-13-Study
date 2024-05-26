import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

const SliderRange = () => (
  <SliderPrimitive.Range className="bg-primary absolute h-full" />
);
SliderRange.displayName = SliderPrimitive.Range.displayName;

export { SliderRange }; 