import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      purple: '#5E2BFF',
      purple2: '#825CFF',
      purple3: '#C0ADFF',
      black: '#050404',
      white: '#f4f4f4',
    },
    fontFamily: {
      roboto_slab: ['var(--font-roboto-slab)'],
      inconsolata: ['var(--font-inconsolata)'],
    },
  },
  plugins: [],
};
export default config;
