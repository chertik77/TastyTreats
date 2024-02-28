import { Modal } from '../ui'

type ModalProps = {
  isModalOpen: boolean
  toggleModal: () => void
}

export const RecipeModal = ({ isModalOpen, toggleModal }: ModalProps) => {
  return (
    <Modal
      onHide={toggleModal}
      visible={isModalOpen}
      className='bg-lime-50'
      content={<div>ktfjtyf</div>}
    />
  )
}
