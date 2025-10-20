// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Beri tahu Tailwind untuk scan semua file .js, .ts, .jsx, .tsx
    // di dalam folder 'app' dan 'components'
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Kamu bisa tambahkan folder lain di sini jika perlu
    // "./src/**/*.{js,ts,jsx,tsx,mdx}", // (Kalau pakai folder src)
  ],
  theme: {
    extend: {
      // Kamu bisa tambahkan kustomisasi tema di sini nanti
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};
export default config;