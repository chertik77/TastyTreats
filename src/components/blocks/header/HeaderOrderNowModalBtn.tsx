'use client'

import { useModal } from '@/hooks'

import { OrderNowModal } from '@/components/features/OrderNowModal'
import { CartIcon } from '@/components/ui'

export const HeaderOrderNowModalBtn = () => {
  const { isModalOpen, toggleModal } = useModal()

  return (
    <>
      <button
        className='leading-[0]'
        onClick={toggleModal}>
        <CartIcon />
      </button>
      {isModalOpen && (
        <OrderNowModal
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
        />
      )}
    </>
  )
}
