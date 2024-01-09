'use client'

import { OrderNowModal } from 'components/ui/OrderNowModal'
import { useModal } from 'hooks/useModal'

export const HeaderOrderNowModalBtn = () => {
  const { isModalOpen, toggleModal } = useModal()

  return (
    <>
      <button onClick={toggleModal} className='leading-[0]'>
        <i className='pi pi-shopping-cart text-2xl'></i>
      </button>
      <OrderNowModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  )
}
