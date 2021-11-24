module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          'soft-red': 'hsl(7, 99%, 70%)',
          'Yellow': 'hsl(51, 100%, 49%)',
          'graphic-design-text': 'hsl(167, 40%, 24%)',
          'photography-text': 'hsl(198, 62%, 26%)',
          'footer-color': 'hsl(168, 34%, 41%)'
        },
        neutral:{
          'Very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
          'Very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
          'Dark-grayish-blue': 'hsl(232, 10%, 55%)',
          'Grayish-blue': 'hsl(210, 4%, 67%)',
          'White': 'hsl(0, 0%, 100%)'
        }
      },
      fontFamily:{
        barlow: "'Barlow', sans-serif",
        fraunces: "'Fraunces', serif"
      },
      backgroundImage: {
        'mobile-hero-image': "url(../public/images/mobile/image-header.jpg)",
        'desktop-hero': "url(../public/images/desktop/image-header.jpg)",
        'orange-image-mobile':"url(../public/images/mobile/image-photography.jpg)",
        'orange-image-desktop':"url(../public/images/desktop/image-photography.jpg)",
        'apple-image-mobile': "url(../public/images/mobile/image-graphic-design.jpg)",
        'apple-image-desktop': "url(../public/images/desktop/image-graphic-design.jpg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
