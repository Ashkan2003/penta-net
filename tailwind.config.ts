import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // change the defult font of tailwind by setting it to "sans". becus the tailwind uses "sans" as its defualt font-family
        sans: ["IranSansWeb"],
      },
    },
  },
  plugins: [],
};
export default config;
