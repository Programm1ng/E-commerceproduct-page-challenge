const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/components/*.js',
    './src/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans'],
      },
      colors: {
        "primary-orange": "hsl(26, 100%, 55%)",
        "primary-pale-orange": "hsl(25, 100%, 94%)",
        'very-dark-blue': "hsl(220, 13%, 13%)",
        'dark-grayish-blue': "hsl(219, 9%, 45%)",
        'grayish-blue': "hsl(220, 14%, 75%)",
        'very-dark-blue': "hsl(220, 13%, 13%)",
        'black-transparent': '#000000BF'
      },
    },
  },
  plugins: [],
}

/**
 * - Very vark blue: hsl(220, 13%, 13%)
- Dark grayish blue: hsl(219, 9%, 45%)
- Grayish blue: hsl(220, 14%, 75%)
- Light grayish blue: hsl(223, 64%, 98%)
- White: hsl(0, 0%, 100%)
- Black (with 75% opacity for lightbox background): hsl(0, 0%, 0%)
 */