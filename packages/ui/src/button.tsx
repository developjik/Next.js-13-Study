"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  appName?: string;
}

export const Button = ({ children, appName }: ButtonProps) => {
  return (
    <button
      className="bg-red-400 text-blue-500 hover:bg-red-500 hover:text-white font"
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
