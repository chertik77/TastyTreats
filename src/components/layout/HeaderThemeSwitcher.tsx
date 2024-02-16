'use client'

import { useTheme } from 'next-themes'
import { InputSwitch, type InputSwitchProps } from 'primereact/inputswitch'
import { classNames } from 'primereact/utils'
import { useEffect, useState } from 'react'

type HeaderThemeSwitcherProps = {
  className?: string
}

type InputSwitchPropTypes = {
  props: InputSwitchProps
}

export const HeaderThemeSwitcher = ({
  className
}: HeaderThemeSwitcherProps) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isThemeDark = theme === 'dark' || resolvedTheme === 'dark'
  const passThroughOptions = {
    root: { className: `relative w-[46px] h-5 ${className}` },
    slider: ({ props: { checked } }: InputSwitchPropTypes) => ({
      className: classNames(
        `absolute cursor-pointer inset-0 rounded-full before:absolute before:top-[10.8%]
        before:bg-lighter before:w-4 before:h-4 before:left-[6%] before:rounded-full
        before:transition`,
        { 'bg-brand before:translate-x-6': checked, 'bg-switch': !checked }
      )
    })
  }

  return (
    <InputSwitch
      checked={isThemeDark}
      name='theme-switch'
      onChange={() => setTheme(isThemeDark ? 'light' : 'dark')}
      pt={passThroughOptions}
      unstyled
    />
  )
}
