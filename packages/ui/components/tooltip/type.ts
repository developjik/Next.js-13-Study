import * as TooltipPrimitive from "@radix-ui/react-tooltip";

type TooltipTriggerProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Trigger
>;

type TooltipContentProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Content
>;

type TooltipArrowProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Arrow
>;

type TooltipWrapperProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Provider
> &
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>;

export type {
  TooltipTriggerProps,
  TooltipContentProps,
  TooltipArrowProps,
  TooltipWrapperProps,
};
