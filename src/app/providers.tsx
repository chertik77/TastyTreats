'use client'

import { ThemeProvider } from 'next-themes'
import { PrimeReactProvider } from 'primereact/api'
import { PropsWithChildren } from 'react'

export const Providers = ({ children }: PropsWithChildren) => (
  <PrimeReactProvider>
    <ThemeProvider attribute='class'>{children}</ThemeProvider>
  </PrimeReactProvider>
)
