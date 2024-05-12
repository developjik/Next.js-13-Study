import type { Config } from 'tailwindcss'; 


const content = [
  "./**/*.{js,ts,jsx,tsx}",
  "../ui/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}", 
]

const keyframes = {
  "accordion-down": {
    from: { height: "0" },
    to: { height: "var(--radix-accordion-content-height)" },
  },
  "accordion-up": {
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: "0" },
  },
}

const animation = {
  "accordion-down": "accordion-down 0.2s ease-out",
  "accordion-up": "accordion-up 0.2s ease-out",
}

const extend = {
  keyframes,
  animation,
};

const theme = {extend}

const plugins = [require("tailwindcss-animate")]

const config: Config = {
  // content,
  theme,
  plugins,
};

export default config;