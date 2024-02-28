'use client'

import dynamic from 'next/dynamic'

import { CartIcon } from '@/components/ui'

import { useModal } from '@/hooks'

const OrderNowModal = dynamic(() =>
  import('@/components/features/OrderNowModal').then(r => r.OrderNowModal)
)

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
