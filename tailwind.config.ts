import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
    extend: {
      screens:{
        "2xl":"1480px"
      },
      colors: {
        firstText: "#ffffff",
        secondText: "#a8a8a8",
      },
      fontFamily: {
        // change the defult font of tailwind by setting it to "sans". becus the tailwind uses "sans" as its defualt font-family
        sans: ["IranSansWeb"],
      },
    },
  },
  plugins: [],
};
export default config;
