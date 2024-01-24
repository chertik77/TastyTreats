'use client'

import { Modal } from 'components/ui/Modal'
import { useModal } from 'hooks/useModal'
import { HeaderNav } from './HeaderNav'
import { HeaderThemeSwitcher } from './HeaderThemeSwitcher'

export const HeaderBurgerMenu = () => {
  const { isModalOpen, toggleModal } = useModal()

  const BurgerDialogPassThroughOptions = {
    footer: { className: 'bg-brand dark:bg-dark' },
    closeButtonIcon: { className: 'w-8 h-8 text-light' }
  }

  return (
    <>
      <button onClick={toggleModal} className='leading-[0] tablet:hidden' type='button'>
        <i className='pi pi-align-justify text-2xl text-dark dark:text-light'></i>
      </button>
      {isModalOpen && (
        <Modal
          visible={isModalOpen}
          onHide={toggleModal}
          content={undefined}
          headerClassName='bg-brand dark:bg-dark rounded-none'
          contentClassName='bg-brand dark:bg-dark'
          className='m-0 min-h-dvh w-[200px] shadow-none'
          position='right'
          pt={BurgerDialogPassThroughOptions}
          footer={<HeaderThemeSwitcher />}>
          <HeaderNav
            className='flex flex-col items-center gap-4 pt-[60px] text-fs-12-lh-normal-fw-500'
            hideModal={toggleModal}
          />
        </Modal>
      )}
    </>
  )
}
