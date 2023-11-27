/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-varta)', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'serif'],
        action: ['var(--font-karla)', 'sans-serif']
      }
    }
  },
  plugins: []
}
