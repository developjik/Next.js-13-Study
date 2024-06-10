import { cn } from "@repo/utils";
import React from "react";

export type InputNumberProps = React.InputHTMLAttributes<HTMLInputElement> & {
  decimalPlaces?: number;
  min?: number;
  max?: number;
};

const parseNumber = (value: string) => value.replace(/,/g, "");
const formatNumber = (value: string) =>
  value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  ({ className, type, decimalPlaces = 0, min, max, ...props }, ref) => {
    const [displayValue, setDisplayValue] = React.useState<string>("");

    const regx = React.useMemo(
      () =>
        decimalPlaces === 0
          ? /^\d*$/
          : // eslint-disable-next-line @rushstack/security/no-unsafe-regexp
            new RegExp(`^\\d*\\.?\\d{0,${decimalPlaces}}$`),
      [decimalPlaces],
    );

    const onChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseNumber(event.target.value);

        if (regx.test(parseNumber(value))) {
          const formattedValue = formatNumber(value);
          setDisplayValue(formattedValue);

          props?.onChange?.({
            ...event,
            target: {
              ...event.target,
              value: parseNumber(value),
            },
          });
        }
      },
      [min, max, regx, props?.onChange],
    );

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
        value={displayValue}
        onChange={onChange}
      />
    );
  },
);
InputNumber.displayName = "Input";

export { InputNumber };
