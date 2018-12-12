
export const font = `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`

export const fonts = {
  sansSerif: font,
  monoLinux: `Droid Sans Mono", "monospace", monospace, "Droid Sans Fallback`,
  monoWin: `Consolas, "Courier New", monospace`,
  monoMac: `Menlo, Monaco, "Courier New", monospace`,
  mono: `Droid Sans Mono", "Andale Mono", Consolas, monospace`
}

export const regular = 400
export const bold = 600
export const fontSizes = [12, 14, 16, 20, 24, 32, 48];
export const fontWeights = { regular, bold }
export const space = [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80];

export const background = {
  light: '#FFFFFF',
  primary: '#0C143D',
  secondary: '#222C59',
  error: '#FEE5ED'
}

export const colors = {
  accent: '#FA2A6A',
  dark: '#000',
  light: '#fff',
  error: '#FA2A6A',
  warning: '#FA2A6A',
  subtle: '#EDF0F2',
  highlight: '#E1F5FE',
  link: '#039BE5',

  primary: '#00BFA5',
  primaryLight: '#00EAC3',
  primaryDark: '#008A7E',

  secondary: '#0C143D',
  secondaryLight: '#222C59',
  text: '#263238',

  lightBlue: '#cdf',
  blue: '#007aff',
  darkBlue: '#049',
  lightGreen: '#cec',
  green: '#0a0',
  darkGreen: '#060',
}

export const borders = [
  0,
  '1px solid',
  '2px solid',
  '4px solid',
  '8px solid',
  '16px solid',
  '32px solid',
];

export const z = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  max1: 1000,
  max2: 2000,
  max3: 3000,
  max4: 4000,
  max5: 5000
};

const theme = {
  colors,
  background,
  fontSizes,
  font,
  fontWeights,
  space,
  borders,
  regular,
  bold
}

export default theme;