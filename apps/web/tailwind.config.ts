import type { Config } from "tailwindcss";
import sharedConfig from "@repo/configs/tailwind/tailwind.config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  presets: [sharedConfig],
};
 
export default config;