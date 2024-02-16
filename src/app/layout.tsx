import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { Container } from 'components/Container'
import { Header } from 'components/layout/Header'
import { Inter } from 'next/font/google'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import { Toaster } from 'sonner'

import './globals.css'
import { Providers } from './providers'

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
  <html lang='en' suppressHydrationWarning>
    <body className={`${inter.className} dark:bg-[#161616]`}>
      <Container>
        <Providers>
          <Header />
          <main>
            <Toaster position='top-right' richColors />
            {children}
          </main>
        </Providers>
      </Container>
    </body>
  </html>
)

export default RootLayout
