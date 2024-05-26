import * as SliderPrimitive from "@radix-ui/react-slider"

const SliderThumb = ()=> <SliderPrimitive.Thumb className="cursor-pointer block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
SliderThumb.displayName = SliderPrimitive.Thumb.displayName;
 
export { SliderThumb }; 