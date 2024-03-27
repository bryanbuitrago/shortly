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
        cyan: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',
        //  ===================================
        // veryDarkBlue: 'hsl(255, 11%, 22%)',
        // darkViolet: 'hsl(257, 27%, 26%)',
        // veryDarkViolet: 'hsl(260, 8%, 14%) ',
        // grayishViolet: 'hsl(257, 7%, 63%)',
        // red: 'hsl(0, 87%, 67%)',
        // cyan: 'hsl(180, 66%, 49%)',
        // cyanLight: 'hsl(180, 66%, 69%)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        180: '32rem',
      },
      screens: {
        sm: { min: '480px' },
        md: { min: '768px' },
        lg: { min: '976px' },
        xl: { min: '1440px' },
      },
    },
  },
  plugins: [],
};
