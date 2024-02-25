'use client'

import type { PropsWithChildren } from 'react'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'

export const Providers = ({ children }: PropsWithChildren) => (
  <NextUIProvider>
    <ThemeProvider attribute='class'>{children}</ThemeProvider>
  </NextUIProvider>
)
