'use client'

import { OrderNowModal } from 'components/ui/OrderNowModal'
import { useModal } from 'hooks/useModal'

export const HeroOrderNowModalBtn = () => {
  const { isModalOpen, toggleModal } = useModal()

  return (
    <>
      <button className='btn-order' type='button' onClick={toggleModal}>
        Order Now
      </button>
      {isModalOpen && <OrderNowModal isModalOpen={isModalOpen} toggleModal={toggleModal} />}
    </>
  )
}
