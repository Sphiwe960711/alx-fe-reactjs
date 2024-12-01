module.exports = {
  purge: ['./src/**/*.{html,js}'],
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },

  darkMode: 'class', // Optional: Use 'class' strategy or 'media' for system-based dark mode
  theme: {
    extend: {
      // Custom theme extensions (e.g., colors, spacing, etc.)
    },
  },
  plugins: [
    // Add custom Tailwind plugins if necessary
  ],
};
