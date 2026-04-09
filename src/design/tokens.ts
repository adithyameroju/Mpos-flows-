/**
 * TypeScript mirror of ACKO design tokens — keep in sync with `tokens.css` / `theme-semantic.css`.
 */
export const colors = {
  purple: {
    600: '#4E29BB',
    700: '#2E1773',
  },
  onyx: {
    100: '#FFFFFF',
    500: '#5D5D5D',
    800: '#0A0A0A',
  },
} as const;

export const space = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
} as const;

/** iOS-style continuous corner scale */
export const radii = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 28,
  xxl: 36,
  pill: 9999,
} as const;
