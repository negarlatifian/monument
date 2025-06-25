import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx,mdx}', // ← adjust to your folders
  ],
  theme: {
    extend: {
      fontFamily: {
        /* 2) or (optionally) a dedicated class `font-mont` */
        mont: ['var(--font-montserrat)', 'ui-sans-serif', 'system-ui'],
        roboto: ['var(--font-roboto)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
export default config;
