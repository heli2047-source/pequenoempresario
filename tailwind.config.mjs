/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        sp: {
          bg: 'var(--sp-bg)',
          'bg-elevated': 'var(--sp-bg-elevated)',
          'bg-card': 'var(--sp-bg-card)',
          surface: 'var(--sp-surface)',
          border: 'var(--sp-border)',
          'border-light': 'var(--sp-border-light)',
          primary: 'var(--sp-primary)',
          'primary-hover': 'var(--sp-primary-hover)',
          'primary-soft': 'var(--sp-primary-soft)',
          accent: 'var(--sp-accent)',
          'accent-soft': 'var(--sp-accent-soft)',
          text: 'var(--sp-text)',
          'text-muted': 'var(--sp-text-muted)',
          'text-dim': 'var(--sp-text-dim)',
          white: 'var(--sp-white)',
          'navbar-bg': 'var(--sp-navbar-bg)',
          'navbar-border': 'var(--sp-navbar-border)',
          'footer-bg': 'var(--sp-footer-bg)',
          'footer-text': 'var(--sp-footer-text)',
          'footer-border': 'var(--sp-footer-border)',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'Cascadia Code',
          'Source Code Pro',
          'Menlo',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
