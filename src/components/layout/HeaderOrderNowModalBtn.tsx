'use client'

import { CartIcon } from '@/components/ui/CartIcon'
import { OrderNowModal } from '@/components/ui/OrderNowModal'
import { useModal } from '@/hooks/useModal'

export const HeaderOrderNowModalBtn = () => {
  const { isModalOpen, toggleModal } = useModal()

  return (
    <>
      <button className='leading-[0]' onClick={toggleModal}>
        <CartIcon />
      </button>
      {isModalOpen && (
        <OrderNowModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      )}
    </>
  )
}
