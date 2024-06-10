import { type VariantProps } from "class-variance-authority";
import { ButtonStyle } from "./style";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonStyle> & {
    asChild?: boolean;
  };

export { ButtonProps };
