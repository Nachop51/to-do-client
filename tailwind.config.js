/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: ['aqua', 'cupcake', 'dark', 'dim']
  },
  plugins: [require('daisyui')]
}
