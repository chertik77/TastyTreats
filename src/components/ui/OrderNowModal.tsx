import { useRequest } from 'alova'
import { addOrder } from 'api/addOrder'
import { useOrderForm } from 'hooks/userOrderForm'
import { promiseToast } from 'utils/helpers/promiseToast'
import type { Data } from 'utils/schema'
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

  const OrderNowModalPathTroughOptions = {
    root: {
      className:
        'w-[335px] min-h-[582px] bg-light rounded-[15px] relative tablet:w-[440px] tablet:min-h-[632px] tablet:px-10 shadow-none dark:bg-dark'
    },
    mask: { className: 'backdrop-blur-md backdrop-saturate-150 bg-overlay/30' },
    content: { className: 'tablet:pl-0 dark:bg-dark overflow-hidden' },
    header: { className: 'pt-[28px] pb-[28px] tablet:pt-10 tablet:pb-10 tablet:pl-0 dark:bg-dark' },
    headerTitle: { className: 'text-fs-18-lh-122-fw-600 text-dark uppercase dark:text-light' },
    closeButton: {
      className: 'w-5 h-5 absolute top-[14px] right-[14px] tablet:w-6 tablet:h-6 tablet:top-4 tablet:right-4'
    },
    closeButtonIcon: { className: 'w-full h-full text-dark dark:text-light' }
  }

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
      isVisible={isModalOpen}
      hide={toggleModal}
      pathTroughOptions={OrderNowModalPathTroughOptions}
      header={<h2>Order now</h2>}>
      <form onSubmit={handleSubmit(submit)}>
        <Field labelName='Name' errors={errors} {...register('name')} autoComplete='given-name' />
        <PhoneField control={control} errors={errors} />
        <Field labelName='Email' errors={errors} {...register('email')} autoComplete='email' />
        <Field labelName='Comment' {...register('comment')} isTextArea />
        <button
          type='submit'
          className='btn-send disabled:cursor-not-allowed disabled:opacity-50'
          disabled={!isValid}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </Modal>
  )
}
