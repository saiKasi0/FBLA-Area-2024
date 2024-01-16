import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial"],
     },
    },
  },
  plugins: [],
} satisfies Config;
