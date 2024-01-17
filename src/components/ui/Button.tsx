import type { ButtonHTMLAttributes } from 'react'

type Button = ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: 'submit' | 'button'
}

export const Button = ({ type = 'button', children, ...options }: Button) => (
  <button type={type} {...options}>
    {children}
  </button>
)
