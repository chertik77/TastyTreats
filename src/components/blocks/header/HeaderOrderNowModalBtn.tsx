'use client'

import { OrderNowModal } from '@/components/features/OrderNowModal'
import { CartIcon } from '@/components/ui'

import { useModal } from '@/hooks'

export const HeaderOrderNowModalBtn = () => {
  const { isModalOpen, toggleModal } = useModal()

  return (
    <>
      <button
        className='leading-[0]'
        onClick={toggleModal}>
        <CartIcon />
      </button>
      <OrderNowModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
      />
    </>
  )
}
