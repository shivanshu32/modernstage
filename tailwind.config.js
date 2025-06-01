/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          900: '#0c0c14', // Deep midnight blue-black
          800: '#14142b', // Rich dark indigo
          700: '#1e1e3f', // Deep royal purple
          600: '#2d2d4d', // Dark slate blue
          500: '#2c2c54', // Midnight purple
          400: '#40407a', // Deep blue-purple
          300: '#706fd3', // Lavender purple
          200: '#c2c1f0', // Soft lavender
          100: '#e9e8ff', // Light lavender
          50: '#f5f5ff', // Almost white lavender
        },
        primary: {
          50: '#fff9e6',
          100: '#ffedb3',
          200: '#ffe180',
          300: '#ffd54d',
          400: '#ffc91a',
          500: '#e6b300', // Main brand color
          600: '#b38a00',
          700: '#806200',
          800: '#4d3a00',
          900: '#1a1300',
        },
        secondary: {
          50: '#e6f2ff',
          100: '#b3d7ff',
          200: '#80bcff',
          300: '#4da1ff',
          400: '#1a86ff',
          500: '#006ce6',
          600: '#0054b3',
          700: '#003c80',
          800: '#00234d',
          900: '#000b1a',
        },
        dark: {
          50: '#f2f2f2',
          100: '#d9d9d9',
          200: '#bfbfbf',
          300: '#a6a6a6',
          400: '#8c8c8c',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          800: '#262626',
          900: '#0d0d0d',
          950: '#050505',
        },
        yellow: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
      },
    },
  },
  plugins: [],
} 