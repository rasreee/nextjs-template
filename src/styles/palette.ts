export const palette = {
  white: '#fff',
  gray: [
    '#fff',
    '#B3B5B5',
    '#949697',
    '#757879',
    '#57595C',
    '#38393E',
    '#1A1A20',
    '#18171C',
    '#151318',
    '#131014'
  ],
  iris: '#4349CB'
} as const;

export type PaletteColor = keyof typeof palette;
