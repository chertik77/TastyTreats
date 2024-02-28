'use client'

import dynamic from 'next/dynamic'

import { useModal } from '@/hooks'

const OrderNowModal = dynamic(() =>
  import('@/components/features/OrderNowModal').then(r => r.OrderNowModal)
)

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
      <OrderNowModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
      />
    </>
  )
}
