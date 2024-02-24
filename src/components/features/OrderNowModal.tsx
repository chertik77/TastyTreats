import type { OrderSchemaFields } from '@/utils/order-schema'

import { useOrderForm } from '@/hooks'
import { RECIPE_SERVICE } from '@/services'
import { useRequest } from 'alova'

import { Field, Modal, PhoneField } from '@/components/ui'

import { promiseToast } from '@/utils/functions/promise-toast'

type OrderNowModalProps = {
  isModalOpen: boolean
  toggleModal: () => void
}

export const OrderNowModal = ({
  isModalOpen,
  toggleModal
}: OrderNowModalProps) => {
  const { loading, send } = useRequest(RECIPE_SERVICE.addOrder, {
    immediate: false
  })
  const { control, errors, handleSubmit, isValid, register, reset } =
    useOrderForm()

  const submit = async (data: OrderSchemaFields) => {
    const filteredData = {
      email: data.email,
      name: data.name,
      phone: '+380000000000'
    }

    promiseToast(send(filteredData), {
      error:
        'We apologize, but an error occurred during the order submission. Please try again.',
      loading: 'Processing your order...',
      success: () => {
        reset()
        return 'Your order has been successfully submitted. Thank you!'
      }
    })
  }

  return (
    <Modal
      className='relative rounded-[15px] bg-light px-5 py-[28px] shadow-none dark:bg-dark
        tablet:p-10'
      content={
        <>
          <h2 className='mb-[28px] text-fs-18-lh-122-fw-600 uppercase text-dark dark:text-light'>
            Order now
          </h2>
          <button
            className='absolute right-[14px] top-[14px] leading-[0] tablet:right-4 tablet:top-4'
            onClick={toggleModal}>
            <i className='pi pi-times text-[1.25rem] tablet:text-[1.5rem]'></i>
          </button>
          <form onSubmit={handleSubmit(submit)}>
            <Field
              autoFocus
              errors={errors}
              labelName='Name'
              {...register('name')}
              autoComplete='given-name'
            />
            <PhoneField control={control} />
            <Field
              errors={errors}
              labelName='Email'
              {...register('email')}
              autoComplete='email'
            />
            <Field
              labelName='Comment'
              {...register('comment')}
              isTextArea
            />
            <button
              className='btn-send disabled:cursor-not-allowed disabled:opacity-50'
              disabled={!isValid}
              type='submit'>
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </>
      }
      onHide={toggleModal}
      visible={isModalOpen}
    />
  )
}
