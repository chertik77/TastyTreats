'use client'

import { useTheme } from 'next-themes'
import { InputSwitch } from 'primereact/inputswitch'
import { classNames } from 'primereact/utils'
import { useEffect, useState } from 'react'

export const HeaderThemeSwitcher = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isThemeDark = theme === 'dark' || resolvedTheme === 'dark'

  return (
    mounted && (
      <InputSwitch
        name='theme-switch'
        className={classNames('relative h-5 w-[46px]', className)}
        onChange={() => setTheme(isThemeDark ? 'light' : 'dark')}
        unstyled
        checked={isThemeDark}
      />
    )
  )
}
