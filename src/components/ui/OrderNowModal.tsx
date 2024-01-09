import { Modal } from './Modal'

type OrderNowModalProps = {
  isModalOpen: boolean
  toggleModal: () => void
}

export const OrderNowModal = ({ isModalOpen, toggleModal }: OrderNowModalProps) => {
  const OrderNowModalPathTroughOptions = {
    root: { className: 'w-[335px] h-[582px]' },
  }

  return (
    <Modal isVisible={isModalOpen} hide={toggleModal} pathTroughOptions={OrderNowModalPathTroughOptions}>
      <h1>Order Now</h1>
    </Modal>
  )
}
