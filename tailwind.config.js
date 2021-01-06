module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: 'white',
            a: {
              'text-decoration': 'none',
              'font-weight': 'bold',
              color: 'white',
              '&:hover': {
                color: 'gray',
                'text-decoration': 'underline',
              },
            },
          },
        },
      },
  
      colors: {},
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require('tailwindcss-textshadow')
  ],
};
