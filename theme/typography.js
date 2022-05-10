// ----------------------------------------------------------------------

function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ sm, md, lg }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm)
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md)
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg)
    }
  };
}

const FONT_PRIMARY = 'Roboto';

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    color: '#fff',
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 50, md: 56, lg: 62 })
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    color: '#fff',
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 })
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    color: '#fff',
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 })
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    color: '#fff',
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 })
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    color: '#fff',
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 })
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    color: '#fff',
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 })
  },
  normaltext: {
    fontWeight: 400,
    lineHeight: 28 / 18,
    color: '#fff',
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 17, md: 18, lg: 19 })
  },
  profiletext: {
    fontWeight: 700,
    lineHeight: 36 / 28,
    color: '#fff',
    fontSize: pxToRem(26),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 26 })
  },
  profileheading: {
    fontWeight: 700,
    lineHeight: 36 / 28,
    color: '#fff',
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 28, md: 36, lg: 42 })
  },
  posttext: {
    fontWeight: 600,
    lineHeight: 25 / 15,
    color: '#0D0F13',
    opacity:'0.6',
    fontSize: pxToRem(15),
    ...responsiveFontSizes({ sm: 14, md: 14, lg: 15 })
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#fff',
    letterSpacing:'1.2px',
    fontSize: pxToRem(17)
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16)
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    color:'#ed2c13'
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: 'uppercase'
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
    ...responsiveFontSizes({ sm: 12, md: 13, lg: 14 })
  }
};

export default typography;
