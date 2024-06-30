import sharedConfig from "configs/tailwind/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./components/**/*.{js,ts,jsx,tsx}"],
  presets: [sharedConfig],
};

export default config;
