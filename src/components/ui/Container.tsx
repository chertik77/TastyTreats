import type { PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren) => (
  <div className='overflow-x-hidden'>
    <div className='container'>{children}</div>
  </div>
)
