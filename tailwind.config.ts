import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B263B", // Navy Blue
        },
        secondary: {
          DEFAULT: "#F5F5F5", // Light Gray
        },
        accent: {
          DEFAULT: "#17A2B8", // Teal
        },
        text: {
          DEFAULT: "#343A40", // Dark Gray
        },
        complement: {
          DEFAULT: "#2563eb", // Blue
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      scrollBehavior: ["responsive", "motion-safe", "motion-reduce"],
    },
  },
  plugins: [],
};

export default config;
