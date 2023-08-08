

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
  xxl: 2000,
};

export const SCREEN_SIZE = {
  xxl: `@media screen and (min-width: ${breakpointMap.xxl}px)`,
}

// Navbar settings
export const SETTINGS_NAVBAR: { [key: string]: { [key: string]: number | string } } = {
  padding: {
    sm: 10,
    md: 20,
  },
}

// Paddings
export const PADDING: { [key: string]: { [key: string]: number } } = {
  MAIN: {
    SP: 10,
    MP: 20,
    LG: 100,
  },
  CONTAINER: {
    SP: 10,
    MP: 20,
    LG: 20,
  },
}

// Height
export const HEIGHT: { [key: string]: number } = { FOOTER: 15, MENU: 10 }
// Colors
const GRADIENT1 = 'linear-gradient(0deg, rgba(41,30,92,1) 0%, rgba(210,136,244,1) 0%, rgba(9,9,121,1) 100%)'
const CARD = '#282f64'
export const COLORS: { [key: string]: string } = { BACKGROUND: '#110217', MAIN: '#291e5c', CONTAINER: '#110217', GRADIENT1, CARD }
// Margins
export const MARGIN: { [key: string]: number } = { SM: 24 }
// Font size
export const FONTSIZE: { [key: string]: string } = { SM: '12px', MD: '16px', XL: '20px', XXL: '30px' }
// Font style
export const FONTSTYLE: { [key: string]: string } = { font1: 'Mustica Pro', font2: 'One Splice' }
