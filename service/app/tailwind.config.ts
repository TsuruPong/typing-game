import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      current: "current",
      space_grey: {
        100: "#9FBDFF",
        200: "#87A1D9",
        300: "#7990C2",
        400: "#6679A3",
        500: "#515F73",
        600: "#404C66",
        700: "#364155",
        800: "#252C3B",
        900: "#171B24"
      },
      white: "#fff",
      amber: "#f59e0b",
      red: "#b91c1c",
      dark_cyan: "#469B96"
    }
  },
  defaultMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        "space-grey": {
          extend: "dark",
          colors: {
          }
        }
      }
    })
  ],
};
export default config;
