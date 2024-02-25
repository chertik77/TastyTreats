'use client'

import type { PropsWithChildren } from 'react'

import { ThemeProvider } from 'next-themes'
import { PrimeReactProvider } from 'primereact/api'

import { pt } from '@/utils/primereact-tailwind-theme'

export const Providers = ({ children }: PropsWithChildren) => (
  <PrimeReactProvider value={{ pt }}>
    <ThemeProvider attribute='class'>{children}</ThemeProvider>
  </PrimeReactProvider>
)
