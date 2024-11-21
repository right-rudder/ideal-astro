/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "main-black": "#030712",
        "main-blue": "#08599e",
        "main-red": "#c82626",
        "main-purple": "#b252a0",
        "main-orange": "#f58632",
        "main-gray": "#a7a9ad",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
