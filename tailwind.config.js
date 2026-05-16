/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#05060A',
        purple: '#9B6FFF',
        cyan: '#3BE8D4',
        pink: '#FF8AC0',
        gold: '#FFD166',
      },
      fontFamily: {
        head: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'float-orb': 'floatOrb 6s ease-in-out infinite',
        'orb-spin': 'orbSpin 8s linear infinite',
        'pulse-dot': 'pulse 2s infinite',
        'float-blob': 'floatBlob 22s linear infinite',
      },
      keyframes: {
        floatOrb: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        orbSpin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        floatBlob: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -60px) scale(1.05)' },
          '66%': { transform: 'translate(-30px, 40px) scale(0.95)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(150deg, #fff 30%, rgba(155,111,255,0.85) 70%, rgba(59,232,212,0.7))',
      },
    },
  },
  plugins: [],
}
