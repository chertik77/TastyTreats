'use client'

import { useTheme } from 'next-themes'
import { InputSwitch } from 'primereact/inputswitch'
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
        checked={isThemeDark}
        name='theme-switch'
        onChange={() => setTheme(isThemeDark ? 'light' : 'dark')}
        pt={{
          root: { className: `relative w-[46px] h-5 ${className}` }
        }}
        unstyled
      />
    )
  )
}
