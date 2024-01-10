import { Container } from 'components/Container'
import { Header } from 'components/layout/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import type { PropsWithChildren } from 'react'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'], display: 'swap', weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  title: 'TastyTreats',
  description:
    'Welcome to TastyTreats, your go-to online culinary haven! Discover a world of delicious recipes.'
}

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang='en' suppressHydrationWarning>
    <body className={`${inter.className} dark:bg-[#161616]`}>
      <Container>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </Container>
    </body>
  </html>
)

export default RootLayout
