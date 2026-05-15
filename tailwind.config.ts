import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,vue,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'cc-bg': '#000000',
        'cc-text': '#fdfdfd',
        'cc-border': '#1a1a1a',
        'cc-muted': '#8a8a8a',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'tight': '-0.02em',
      }
    }
  }
} satisfies Config