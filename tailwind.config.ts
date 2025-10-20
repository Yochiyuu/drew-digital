// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Pastikan path ini benar menunjuk ke folder app dan components kamu
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
