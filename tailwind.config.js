/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(80% 60% at 50% 20%, rgba(75, 85, 99, 0.4), rgba(9, 9, 11, 0))",
      },
      colors: {
        trinitas: {
          night: "#09090b",
        },
      },
    },
  },
  plugins: [],
};
