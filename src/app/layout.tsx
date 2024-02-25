import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

import { Header } from '@/components/blocks'
import { Container } from '@/components/ui'

import { Providers } from './providers'

import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import './globals.css'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

export const metadata: Metadata = {
  description:
    'Welcome to TastyTreats, your go-to online culinary haven! Discover a world of delicious recipes.',
  title: 'TastyTreats'
}

const RootLayout = ({ children }: PropsWithChildren) => (
  <html
    lang='en'
    suppressHydrationWarning>
    <body className={`${inter.className} dark:bg-[#161616]`}>
      <Providers>
        <Container>
          <Header />
          <main>
            <Toaster
              position='top-right'
              richColors
            />
            {children}
          </main>
        </Container>
      </Providers>
    </body>
  </html>
)

export default RootLayout
