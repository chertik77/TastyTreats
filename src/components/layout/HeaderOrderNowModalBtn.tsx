'use client'

import { CartIcon } from 'components/ui/CartIcon'
import { OrderNowModal } from 'components/ui/OrderNowModal'
import { useModal } from 'hooks/useModal'

export const HeaderOrderNowModalBtn = () => {
  const { isModalOpen, toggleModal } = useModal()

  return (
    <>
      <button onClick={toggleModal} className='leading-[0]'>
        <CartIcon />
      </button>
      {isModalOpen && <OrderNowModal isModalOpen={isModalOpen} toggleModal={toggleModal} />}
    </>
  )
}
