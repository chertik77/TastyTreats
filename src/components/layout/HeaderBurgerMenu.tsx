'use client'

import { HeaderNav } from './HeaderNav'
import { HeaderThemeSwitcher } from './HeaderThemeSwitcher'
import { Modal } from '@/components/ui/Modal'
import { useModal } from '@/hooks/useModal'

export const HeaderBurgerMenu = () => {
  const { isModalOpen, toggleModal } = useModal()

  const BurgerDialogPassThroughOptions = {
    closeButtonIcon: { className: 'w-8 h-8 text-light' },
    footer: { className: 'bg-brand dark:bg-dark' }
  }

  return (
    <>
      <button
        className='leading-[0] tablet:hidden'
        onClick={toggleModal}
        type='button'>
        <i className='pi pi-align-justify text-2xl text-dark dark:text-light'></i>
      </button>
      {isModalOpen && (
        <Modal
          className='m-0 min-h-dvh w-[200px] shadow-none'
          content={undefined}
          contentClassName='bg-brand dark:bg-dark'
          footer={<HeaderThemeSwitcher />}
          headerClassName='bg-brand dark:bg-dark rounded-none'
          onHide={toggleModal}
          position='right'
          pt={BurgerDialogPassThroughOptions}
          visible={isModalOpen}>
          <HeaderNav
            className='flex flex-col items-center gap-4 pt-[60px] text-fs-12-lh-normal-fw-500'
            hideModal={toggleModal}
          />
        </Modal>
      )}
    </>
  )
}
