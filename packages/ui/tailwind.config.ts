import type { Config } from "tailwindcss";
import sharedConfig from "@repo/configs/tailwind/tailwind.config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./components/**/*.{js,ts,jsx,tsx}"],
  presets: [sharedConfig],
};
 
export default config;
