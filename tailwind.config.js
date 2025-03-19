// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx}", // adjust this based on your project structure
  ],
  theme: {
    extend: {
      textColor: {
        "zinc-900": "#18181b", // ensure the color is available
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".text-8xl": {
          color: "#18181b", // zinc-900
        },
      });
    },
  ],
};
