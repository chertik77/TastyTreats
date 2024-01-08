import { NavLink } from 'react-router-dom'

type HeaderNavProps = {
  className: string
  hideModal?: () => void
  activeLink: string
}

export const HeaderNav = ({ className, activeLink, hideModal }: HeaderNavProps) => (
  <nav className={className}>
    <NavLink to='/' onClick={hideModal} className={activeLink}>
      Home
    </NavLink>
    <NavLink to='/favorites' onClick={hideModal} className={activeLink}>
      Favorites
    </NavLink>
  </nav>
)
