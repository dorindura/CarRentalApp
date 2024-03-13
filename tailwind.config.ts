import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        "navbar-search-tcolor": "#596780",
        "darky-blue": "#1A37A7",
        "light-blue-leftside-section": "#54A6FF",
        "dark-blue-rightside-section": "#3563E9",
        "dark-blue-first-section-cards": "#3563E9",
        "light-blue-first-section-cards": "#54A6FF",
        "grey-for-cards": "#90A3BF",
        "white-for-background": "#F6F7F9",
        "footer-paragraph-color": "#131313",
      }
    },
    screens: {
      "xl": {"max": "1240px"},
      "lg": {"max": "1150px"},
      "sm": {"max": "720px"},
    }
  },
  plugins: [
  ],
};
export default config;
