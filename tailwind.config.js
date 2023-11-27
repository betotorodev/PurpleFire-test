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
        action: ['var(--font-karla)', 'sans-serif'],
        product: ['var(--font-inter)', 'sans-serif']
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite'
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-50% - var(--gap)/2))' }
        }
      }
    }
  },
  plugins: []
}
