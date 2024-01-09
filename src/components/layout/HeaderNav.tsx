import Link from 'next/link'

type HeaderNavProps = {
  className: string
  hideModal?: () => void
  activeLink: string
}

export const HeaderNav = ({ className, activeLink, hideModal }: HeaderNavProps) => (
  <nav className={className}>
    <Link href='/' onClick={hideModal} className={activeLink}>
      Home
    </Link>
    <Link href='/favorites' onClick={hideModal} className={activeLink}>
      Favorites
    </Link>
  </nav>
)
