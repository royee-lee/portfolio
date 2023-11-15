import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      jade: '#00a36c',
      black: '#0a0a0a',
    },
    fontFamily: {
      roboto_slab: ['var(--font-roboto-slab)'],
      inconsolata: ['var(--font-inconsolata)'],
    },
  },
  plugins: [],
};
export default config;
