export default {
    colors: {
        black: '#212121',
        white: '#fff',
        primary: '#FF7070',
        darkPrimary: '#BC4141',
        gray: '#F9F9F9',
        darkGray: "#9E9E9E"
    },
    fontWeight: {
        thin: '300',
        bold: '700',
        medium: '400',

    },
    fontSize: {
        h1: '3rem',
        h2: '2.8rem',
        h3: '2.25rem',
        h4: '2rem',
        h5: '1.3rem',
        h6: '1rem',
        p: '1rem'
    },
    fontSizeSmall: {
        h1: '3rem',
        h2: '1.8rem',
        h3: '1.25rem',
        h4: '1rem',
        h5: '1rem',
        h6: '0.8rem',
        p: '0.8rem'
    },
    textDecoration: {
        underline: 'underline',
        uppercase: 'uppercase',

    },
    screenSize: {
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '900px',
        laptop: '1024px',
        laptopL: '1440px',
        desktop: '2560px'
    },
    flexboxgrid: {
        // Defaults
        gridSize: 12, // columns
        gutterWidth: 1, // rem
        outerMargin: 2, // rem
        mediaQuery: 'only screen',
        container: {
          sm: 46, // rem
          md: '900px', // rem
          lg: 76  // rem
        },
        breakpoints: {
          xs: 0,  // em
          sm: 48, // em
          md: 64, // em
          lg: 75  // em
        }
      },
}