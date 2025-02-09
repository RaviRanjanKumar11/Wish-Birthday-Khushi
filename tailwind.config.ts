/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        flicker: "flicker 0.5s infinite alternate",
        smoke: "smoke 1.5s forwards",
        fadeIn: "fade-in 1s ease-in-out",
      },
      keyframes: {
        flicker: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.7", transform: "scaleY(1.1)" },
          "100%": { opacity: "1" },
        },
        smoke: {
          "0%": { opacity: "0.5", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-30px)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
