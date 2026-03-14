import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F7F6F4',
        'dark': '#1F1F1F',
        'light-gray': '#EFEDEB',
        'accent': '#6B4F3A',
        'accent-alt': '#6C7A6B',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      maxWidth: {
        'container': '1200px',
      }
    },
  },
  plugins: [],
}

export default config
