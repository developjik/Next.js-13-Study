"use client";

import React from "react";

import {
  CheckboxRoot,
  CheckboxRootProps,
  CheckboxRootRefProps,
} from "./checkbox-root";
import { CheckboxIndicator } from "./checkbox-indicator";

const CheckboxOriginal = React.forwardRef<
  CheckboxRootRefProps,
  CheckboxRootProps
>((props, ref) => (
  <CheckboxRoot ref={ref} {...props}>
    <CheckboxIndicator>
      <span>v</span>
    </CheckboxIndicator>
  </CheckboxRoot>
));

const Checkbox = Object.assign(CheckboxOriginal, {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
});

export { Checkbox };
