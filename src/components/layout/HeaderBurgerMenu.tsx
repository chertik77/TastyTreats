import { Modal } from 'components/ui/Modal'
import { useModal } from 'hooks/useModal'
import { HeaderNav } from './HeaderNav'
import { HeaderThemeSwitcher } from './HeaderThemeSwitcher'

export const HeaderBurgerMenu = () => {
  const { isModalOpen, toggleModal } = useModal()

  const BurgerDialogPassThroughOptions = {
    root: { className: 'fixed right-0 top-0 shadow-none w-[200px] min-h-[100dvh]' },
    header: { className: 'bg-brand dark:bg-dark rounded-none' },
    footer: { className: 'bg-brand dark:bg-dark' },
    content: { className: 'bg-brand dark:bg-dark' },
    closeButtonIcon: { className: 'w-8 h-8 text-light' }
  }

  return (
    <>
      <button onClick={toggleModal} className='leading-[0] tablet:hidden' type='button'>
        <i className='pi pi-align-justify text-2xl text-dark dark:text-light'></i>
      </button>
      <Modal
        isVisible={isModalOpen}
        hide={toggleModal}
        pathTroughOptions={BurgerDialogPassThroughOptions}
        footer={<HeaderThemeSwitcher />}>
        <HeaderNav
          className='flex flex-col items-center gap-4 pt-[60px] text-fs-12-lh-normal-fw-500 text-light'
          activeLink='dark:aria-[current=page]:text-brand'
          hideModal={toggleModal}
        />
      </Modal>
    </>
  )
}
