import type { ButtonHTMLAttributes } from 'react'

type Button = ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: 'button' | 'submit'
}

export const Button = ({ children, type = 'button', ...options }: Button) => (
  <button type={type} {...options}>
    {children}
  </button>
)
