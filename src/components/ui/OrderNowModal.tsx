import { useRequest } from 'alova'
import { addOrder } from 'api/addOrder'
import { useOrderForm } from 'hooks/userOrderForm'
import { promiseToast } from 'utils/helpers/promiseToast'
import { Data } from 'utils/schema'
import { Button } from './Button'
import { Field } from './Field'
import { Modal } from './Modal'
import { PhoneField } from './PhoneField'

type OrderNowModalProps = {
  isModalOpen: boolean
  toggleModal: () => void
}

export const OrderNowModal = ({ isModalOpen, toggleModal }: OrderNowModalProps) => {
  const { send, loading } = useRequest(addOrder, { immediate: false })
  const { register, reset, handleSubmit, control, errors, isValid } = useOrderForm()

  const submit = async (data: Data) => {
    const filteredData: Data = { name: data.name, phone: '+380000000000', email: data.email }

    promiseToast(send(filteredData), {
      loading: 'Processing your order...',
      success: () => {
        reset()
        return 'Your order has been successfully submitted. Thank you!'
      },
      error: 'We apologize, but an error occurred during the order submission. Please try again.'
    })
  }

  return (
    <Modal
      visible={isModalOpen}
      className='relative rounded-[15px] bg-light px-5 py-[28px] shadow-none dark:bg-dark tablet:p-10'
      onHide={toggleModal}
      content={
        <>
          <h2 className='mb-[28px] text-fs-18-lh-122-fw-600 uppercase text-dark dark:text-light'>
            Order now
          </h2>
          <Button
            className='absolute right-[14px] top-[14px] leading-[0] tablet:right-4 tablet:top-4'
            onClick={toggleModal}>
            <i className='pi pi-times text-[1.25rem] tablet:text-[1.5rem]'></i>
          </Button>
          <form onSubmit={handleSubmit(submit)}>
            <Field labelName='Name' errors={errors} {...register('name')} autoComplete='given-name' />
            <PhoneField control={control} errors={errors} />
            <Field labelName='Email' errors={errors} {...register('email')} autoComplete='email' />
            <Field labelName='Comment' {...register('comment')} isTextArea />
            <Button
              className='btn-send disabled:cursor-not-allowed disabled:opacity-50'
              type='submit'
              disabled={!isValid}>
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </form>
        </>
      }
    />
  )
}
