import type { Config } from 'tailwindcss/types/config'

import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './node_modules/primereact/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  plugins: [
    plugin(({ addComponents, addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus']),
        addComponents({
          '.btn-categories': {
            '.dark &': {
              border: '1px solid rgba(255, 255, 255, 0.20)',
              color: 'rgba(255, 255, 255, 0.50)'
            },
            '&:is(:hover, :focus)': {
              backgroundColor: '#9BB537',
              borderColor: '#9BB537',
              color: '#F8F8F8 !important'
            },
            '@media only screen and (width >= 1280px)': {
              padding: '14px 28px'
            },
            border: '1px solid rgba(5, 5, 5, 0.20)',
            borderRadius: '15px',
            color: 'rgba(5, 5, 5, 0.50)',
            fontSize: '17px',
            fontWeight: '500',
            lineHeight: 'normal',
            padding: '14px 29px',
            transition:
              'color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)'
          },
          '.btn-favorites': {
            '&:is(:hover, :focus)': { color: '#050505' },
            '@media only screen and (width >= 768px)': { padding: '14px 28px' },
            backgroundColor: '#9BB537',
            borderRadius: '15px',
            color: '#F8F8F8',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: 'normal',
            padding: '12px 24px',
            transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)'
          },
          '.btn-filters': {
            '&:is(:hover, :focus)': {
              backgroundColor: '#9BB537',
              color: '#F8F8F8'
            },
            '@media only screen and (width >= 768px)': {
              fontSize: '16px',
              lineHeight: '1.25'
            },
            border: '1px solid rgba(5, 5, 5, 0.20)',
            borderRadius: '15px',
            color: 'rgba(5, 5, 5, 0.30)',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: 'normal',
            padding: '14px 18px',
            transition:
              'color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)'
          },
          '.btn-order': {
            '&:is(:hover, :focus-visible)': {
              '.dark &': { color: '#050505' },
              backgroundColor: '#9BB537',
              color: '#F8F8F8'
            },
            '.dark &': { color: '#FFF' },
            '@media only screen and (width >= 768px)': {
              borderRadius: '15px',
              padding: '14px 28px'
            },
            border: '1px solid #9BB537',
            borderRadius: '12px',
            color: '#050505',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: 'normal',
            padding: '10px 20px',
            transition:
              'color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)'
          },
          '.btn-recipe': {
            '&:is(:hover, :focus)': { color: '#050505' },
            '@media only screen and (width >= 1280px)': { padding: '8px 16px' },
            backgroundColor: '#9BB537',
            borderRadius: '8px',
            color: '#F8F8F8',
            fontSize: '12px',
            fontWeight: '500',
            lineHeight: 'normal',
            padding: '8px 14px',
            transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)'
          },
          '.btn-send': {
            '&:is(:hover, :focus)': { color: '#050505' },
            '@media only screen and (width >= 768px)': {
              height: '48px',
              width: '360px'
            },
            backgroundColor: '#9BB537',
            borderRadius: '15px',
            color: '#F8F8F8',
            fontSize: '14px',
            fontWeight: '500',
            height: '46px',
            lineHeight: 'normal',
            transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            width: '295px'
          },
          '.main-transition': {
            transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)'
          }
        })
    })
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '15px', lg: '100px', md: '32px' },
      screens: { lg: '1280px', md: '768px', sm: '375px' }
    },
    extend: {
      boxShadow: {
        'phone-select-dark': '0px 2px 5px 0px rgba(177, 177, 177, 0.40);'
      },
      colors: {
        brand: '#9BB537',
        dark: '#050505',
        'dark-20': 'rgba(5, 5, 5, 0.20)',
        'dark-30': 'rgba(5, 5, 5, 0.30)',
        'dark-50': 'rgba(5, 5, 5, 0.50)',
        'dark-80': 'rgba(5, 5, 5, 0.80)',
        'gray-20': 'rgba(255, 255, 255, 0.20)',
        'gray-30': 'rgba(255, 255, 255, 0.30)',
        'gray-50': 'rgba(255, 255, 255, 0.50)',
        'gray-80': 'rgba(255, 255, 255, 0.80)',
        light: '#fff',
        lighter: '#F8F8F8',
        switch: 'rgb(206, 205, 205)'
      },
      fontSize: {
        'fs-10-lh-14-fw-400': ['10px', { fontWeight: 400, lineHeight: '1.4' }],
        'fs-12-lh-133-fw-400': [
          '12px',
          { fontWeight: 400, lineHeight: '1.33' }
        ],
        'fs-12-lh-normal-fw-400': [
          '12px',
          { fontWeight: 400, lineHeight: 'normal' }
        ],
        'fs-12-lh-normal-fw-500': [
          '12px',
          { fontWeight: 500, lineHeight: 'normal' }
        ],
        'fs-14-lh-128-fw-400': [
          '14px',
          { fontWeight: 400, lineHeight: '1.28' }
        ],
        'fs-14-lh-128-fw-600': [
          '14px',
          { fontWeight: 600, lineHeight: '1.28' }
        ],
        'fs-14-lh-normal-fw-500': [
          '14px',
          { fontWeight: 500, lineHeight: 'normal' }
        ],
        'fs-16-lh-125-fw-500': [
          '16px',
          { fontWeight: 500, lineHeight: '1.25' }
        ],
        'fs-16-lh-150-fw-400': ['16px', { fontWeight: 400, lineHeight: '1.5' }],
        'fs-16-lh-1125-fw-600': [
          '16px',
          { fontWeight: 600, letterSpacing: '-0.64px', lineHeight: '1.125' }
        ],
        'fs-18-lh-110-fw-600': [
          '18px',
          { fontWeight: 600, letterSpacing: '-0.72px', lineHeight: '1.1' }
        ],
        'fs-18-lh-122-fw-600': [
          '18px',
          { fontWeight: 600, lineHeight: '1.22' }
        ],
        'fs-18-lh-133-fw-600': [
          '18px',
          { fontWeight: 600, lineHeight: '1.33' }
        ],
        'fs-18-lh-normal-fw-500': [
          '18px',
          { fontWeight: 500, lineHeight: 'normal' }
        ],
        'fs-24-lh-116-fw-600': [
          '24px',
          { fontWeight: 600, lineHeight: '1.16' }
        ],
        'fs-26-lh-120-fw-600': ['26px', { fontWeight: 600, lineHeight: '1.2' }],
        'fs-36-lh-120-fw-600': ['36px', { fontWeight: 600, lineHeight: '1.2' }]
      }
    },
    screens: {
      mobile: '375px',
      tablet: '768px',
      'max-tablet': { max: '767px' },
      desktop: '1280px'
    }
  }
}

export default config
