import type { Config } from 'tailwindcss';

const brand = {
  50: '#EEF2FF',
  100: '#E0E7FF',
  200: '#C7D2FE',
  300: '#A5B4FC',
  400: '#818CF8',
  500: '#6366F1',
  600: '#4F46E5',
  700: '#4338CA',
  800: '#3730A3',
  900: '#312E81',
};

const grey = {
  50: '#F8F8FA',
  100: '#F0F0F3',
  200: '#E0E0E5',
  300: '#C1C1C9',
  400: '#9D9DA8',
  500: '#7A7A87',
  600: '#5C5C69',
  700: '#44444F',
  800: '#2E2E38',
  900: '#1A1A21',
  950: '#0F0F12',
};

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand,
        grey,
        // Backwards-compat: legacy `primary-*` usages on /about, /contact,
        // /privacy, /terms now resolve to the brand-indigo palette so the
        // whole site upgrades together without touching every file.
        primary: brand,
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
    },
  },
  plugins: [],
};

export default config;
