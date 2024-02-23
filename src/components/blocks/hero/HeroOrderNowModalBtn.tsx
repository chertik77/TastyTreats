'use client'

import { OrderNowModal } from '@/components/features/OrderNowModal'

import { useModal } from '@/hooks/useModal'

export const HeroOrderNowModalBtn = () => {
  const { isModalOpen, toggleModal } = useModal()

  return (
    <>
      <button
        className='btn-order'
        onClick={toggleModal}
        type='button'>
        Order Now
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
