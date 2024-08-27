import type { Config } from 'tailwindcss'

import plugin from 'tailwindcss/plugin'

export default {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus', '&:active'])
    })
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '15px', md: '32px', lg: '100px' },
      screens: { sm: '375px', md: '768px', lg: '1280px' }
    },
    extend: {
      colors: {
        black: '#050505',
        brand: '#9BB537',
        white: '#FFF',
        'white-secondary': '#F8F8F8',
        gray: '#CECDCD'
      },
      fontSize: {
        extrasm: ['10px', { fontWeight: 400, lineHeight: '1.4' }],
        sm: ['12px', { lineHeight: 'normal' }],
        base: ['14px', { lineHeight: 'normal' }],
        lg: ['16px', { lineHeight: '1.25' }],
        xl: ['18px', { lineHeight: 'normal' }],
        '2xl': ['24px', { fontWeight: 600, lineHeight: '1.16' }],
        '3xl': ['26px', { fontWeight: 600, lineHeight: '1.2' }],
        '4xl': ['36px', { fontWeight: 600, lineHeight: '1.2' }]
      },
      screens: {
        mobile: '375px',
        tablet: '768px',
        desktop: '1280px'
      }
    }
  }
} satisfies Config
