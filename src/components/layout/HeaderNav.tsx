'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type HeaderNavProps = {
  className: string
  hideModal?: () => void
}

const links = [
  { href: '/', title: 'Home' },
  { href: '/favorites', title: 'Favorites' }
]

export const HeaderNav = ({ className, hideModal }: HeaderNavProps) => {
  const pathname = usePathname()

  return (
    <nav className={className}>
      {links.map(({ href, title }) => (
        <Link
          href={href}
          key={href}
          onClick={hideModal}
          className={
            pathname === href
              ? 'text-brand max-tablet:text-white max-tablet:dark:text-brand'
              : 'main-transition hocus:text-brand max-tablet:text-white'
          }>
          {title}
        </Link>
      ))}
    </nav>
  )
}
