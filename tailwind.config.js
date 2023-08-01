/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-linear-md':
          'linear-gradient(45deg, #574AE8 0%, #3EA1DB 100%)',
        'gradient-linear-mobile':
          'linear-gradient(90deg, #574AE8 0%, #3EA1DB 100%)',
      },
    },
  },
  plugins: [],
}
