'use client'

import type { PropsWithChildren } from 'react'

import { ThemeProvider } from 'next-themes'
import { PrimeReactProvider } from 'primereact/api'

export const Providers = ({ children }: PropsWithChildren) => (
  <PrimeReactProvider>
    <ThemeProvider attribute='class'>{children}</ThemeProvider>
  </PrimeReactProvider>
)
