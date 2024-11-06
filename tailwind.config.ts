import type { Config } from "tailwindcss";
import typographyPlugin from '@tailwindcss/typography';

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        black: colors.black,
        white: colors.white,
        prim: 'var(--color-prim)',
        sec: 'var(--color-sec)',
        ash100: 'var(--color-ash100)',
        ash200: 'var(--color-ash200)',
        ash300: 'var(--color-ash300)',
        ash600: 'var(--color-ash600)',
        ash900: 'var(--color-ash900)',
      }),
      borderColor: ({ theme }) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.ash.600', 'currentColor'),
      }),
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0em',
      },
      fontSize: {
        base: ['1rem', { lineHeight: '1.5em' }],
        20: ['0.833rem', { lineHeight: '1.5em' }],
        24: ['1rem', { lineHeight: '1.5em' }],
        26: ['1.083rem', { lineHeight: '1.4em' }],
        28: ['1.166rem', { lineHeight: '1.3em' }],
        30: ['1.250rem', { lineHeight: '1.2em' }],
        32: ['1.333rem', { lineHeight: '1.2em' }],
        40: ['1.666rem', { lineHeight: '1.15em' }],
      },
    },
  },
  plugins: [
    typographyPlugin,
  ],
};
export default config;
