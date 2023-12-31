import plugin from 'tailwindcss/plugin'

const config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}', './node_modules/primereact/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'fs-10-lh-14-fw-400': ['10px', { lineHeight: '1.4', fontWeight: 400 }],
        'fs-12-lh-normal-fw-400': ['12px', { lineHeight: 'normal', fontWeight: 400 }],
        'fs-12-lh-133-fw-400': ['12px', { lineHeight: '1.33', fontWeight: 400 }],
        'fs-12-lh-normal-fw-500': ['12px', { lineHeight: 'normal', fontWeight: 500 }],
        'fs-14-lh-128-fw-400': ['14px', { lineHeight: '1.28', fontWeight: 400 }],
        'fs-14-lh-normal-fw-500': ['14px', { lineHeight: 'normal', fontWeight: 500 }],
        'fs-14-lh-128-fw-600': ['14px', { lineHeight: '1.28', fontWeight: 600 }],
        'fs-16-lh-150-fw-400': ['16px', { lineHeight: '1.5', fontWeight: 400 }],
        'fs-16-lh-125-fw-500': ['16px', { lineHeight: '1.25', fontWeight: 500 }],
        'fs-16-lh-1125-fw-600': ['16px', { lineHeight: '1.125', fontWeight: 600, letterSpacing: '-0.64px' }],
        'fs-18-lh-normal-fw-500': ['18px', { lineHeight: 'normal', fontWeight: 500 }],
        'fs-18-lh-110-fw-600': ['18px', { lineHeight: '1.1', fontWeight: 600, letterSpacing: '-0.72px' }],
        'fs-18-lh-122-fw-600': ['18px', { lineHeight: '1.22', fontWeight: 600 }],
        'fs-18-lh-133-fw-600': ['18px', { lineHeight: '1.33', fontWeight: 600 }],
        'fs-24-lh-116-fw-600': ['24px', { lineHeight: '1.16', fontWeight: 600 }],
        'fs-26-lh-120-fw-600': ['26px', { lineHeight: '1.2', fontWeight: 600 }],
        'fs-36-lh-120-fw-600': ['36px', { lineHeight: '1.2', fontWeight: 600 }],
      },
    },
    screens: { mobile: '375px', tablet: '768px', 'max-tablet': { max: '768px' }, desktop: '1280px' },
    colors: {
      dark: '#050505',
      'dark-80': 'rgba(5, 5, 5, 0.80)',
      'dark-50': 'rgba(5, 5, 5, 0.50)',
      'dark-30': 'rgba(5, 5, 5, 0.30)',
      'dark-20': 'rgba(5, 5, 5, 0.20)',
      'gray-80': 'rgba(255, 255, 255, 0.80)',
      'gray-50': 'rgba(255, 255, 255, 0.50)',
      'gray-30': 'rgba(255, 255, 255, 0.30)',
      switch: 'rgb(206, 205, 205)',
      light: '#fff',
      lighter: '#F8F8F8',
      brand: '#9BB537',
    },
    container: {
      center: true,
      padding: { DEFAULT: '15px', md: '32px', lg: '100px' },
      screens: { sm: '375px', md: '768px', lg: '1280px' },
    },
  },
  plugins: [
    plugin(({ addComponents, addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus']),
        addComponents({
          '.main-transition': { transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)' },
          '.btn-order': {
            borderRadius: '12px',
            border: '1px solid #9BB537',
            padding: '10px 20px',
            color: '#050505',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: 'normal',
            transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:is(:hover, :focus-visible)': {
              backgroundColor: '#9BB537',
              color: '#F8F8F8',
              '.dark &': { color: '#050505' },
            },
            '.dark &': { color: '#FFF' },
            '@media only screen and (width >= 768px)': { borderRadius: '15px', padding: '14px 28px' },
          },
          '.btn-recipe': {
            borderRadius: '8px',
            padding: '8px 14px',
            backroundColor: '#9BB537',
            color: '#F8F8F8',
            fontSize: '12px',
            fontWeight: '500',
            lineHeight: 'normal',
            transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:is(:hover, :focus)': { color: '#050505' },
            '@media only screen and (width >= 1280px)': { padding: '8px 16px' },
          },
          '.btn-favorites': {
            borderRadius: '15px',
            backroundColor: '#9BB537',
            padding: '12px 24px',
            color: '#F8F8F8',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: 'normal',
            transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:is(:hover, :focus)': { color: '#050505' },
            '@media only screen and (width >= 768px)': { padding: '14px 28px' },
          },
          '.btn-send': {
            borderRadius: '15px',
            backroundColor: '#9BB537',
            padding: '15px 162px',
            color: '#F8F8F8',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: 'normal',
            transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:is(:hover, :focus)': { color: '#050505' },
            '@media only screen and (width >= 768px)': { padding: '14px 162px' },
          },
          '.btn-filters': {
            borderRadius: '15px',
            border: '1px solid rgba(5, 5, 5, 0.20)',
            padding: '14px 18px',
            color: 'rgba(5, 5, 5, 0.30)',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: 'normal',
            transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:is(:hover, :focus)': { backgroundColor: '#9BB537', color: '#F8F8F8' },
            '@media only screen and (width >= 768px)': { fontSize: '16px', lineHeight: '1.25' },
          },
          '.btn-categories': {
            borderRadius: '15px',
            border: '1px solid rgba(5, 5, 5, 0.20)',
            padding: '14px 29px',
            color: 'rgba(5, 5, 5, 0.50)',
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: 'normal',
            transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            '.dark &': { border: '1px solid rgba(255, 255, 255, 0.20)', color: 'rgba(255, 255, 255, 0.50)' },
            '&:is(:hover, :focus)': { backgroundColor: '#9BB537', color: '#F8F8F8', borderColor: '#9BB537' },
            '@media only screen and (width >= 1280px)': { padding: '14px 28px' },
          },
        })
    }),
  ],
}

export default config
