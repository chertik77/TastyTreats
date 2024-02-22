import Link from 'next/link'

import { HeaderBurgerMenu } from './HeaderBurgerMenu'
import { HeaderNav } from './HeaderNav'
import { HeaderOrderNowModalBtn } from './HeaderOrderNowModalBtn'
import { HeaderThemeSwitcher } from './HeaderThemeSwitcher'

export const Header = () => (
  <header className='flex items-center justify-between pt-5 desktop:pt-10 tablet:pt-[30px]'>
    <HeaderNav className='flex gap-4 text-fs-12-lh-normal-fw-400 max-tablet:hidden' />
    <Link
      className='text-fs-16-lh-1125-fw-600 tablet:text-fs-18-lh-110-fw-600'
      href='/'>
      <span className='text-brand'>tasty</span>treats.
    </Link>
    <div className='flex items-center gap-[14px] tablet:gap-6'>
      <HeaderOrderNowModalBtn />
      <HeaderBurgerMenu />
      <HeaderThemeSwitcher className='max-tablet:hidden' />
    </div>
  </header>
)
