/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: '1rem',
    },
    colors: {
      'background': '#B3CAF9',
      'backgroundLight': '#1fb6ff',
      'backgroundImgOffset': '#9DBAD0',
      'primary': '#405DB2',
      'dark': '#3E3F64',
      'specialSong1': '#eef5feDD',
      'specialSong2': '#fdf1c9DD',
      'control': 'hsla(0,0%,100%,.5)',
      'controlFocus': 'rgba(255, 255, 255, 0.9)',
      'controlActive': '#F1DDCDCC',
      'tableBorder': 'rgba(156, 163, 175, 0.25)',
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    backgroundImage: {
      'backgroundImg': "url('/src/lib/images/610bg.webp')",
    },
  },
  plugins: [],
}
