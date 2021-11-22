import { palette } from './palette';

export const brand = {
  text: palette.gray[0],
  headline: palette.white,
  primary: palette.iris,
  body: palette.gray[5]
} as const;

export type BrandColor = keyof typeof brand;

export const fontWeight = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700
};

export const fontSize = { base: 20, large: 28 };

export const typography = {
  body: {
    fontWeight: fontWeight.normal,
    fontSize: `${fontSize.base}px`,
    lineHeight: `${fontSize.base + 8}px`
  }
};

export const theme = {
  brand,
  palette,
  typography,
  fontWeight,
  fontSize
};

export type Theme = typeof theme;
