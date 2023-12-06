import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      accent: '#ff0053',
      accent2: '#990032',
      accent3: '#ff4d87',
      black: '#262626',
      black2: '#050404',
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
