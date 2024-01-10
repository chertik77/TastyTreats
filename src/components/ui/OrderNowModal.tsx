import { valibotResolver } from '@hookform/resolvers/valibot'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { custom, email, minLength, object, string, toTrimmed } from 'valibot'
import { Modal } from './Modal'

type OrderNowModalProps = {
  isModalOpen: boolean
  toggleModal: () => void
}

const phoneUtil = PhoneNumberUtil.getInstance()

const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
  } catch {
    return false
  }
}

const UserSchema = object({
  name: string([
    toTrimmed(),
    minLength(1, 'Please enter your name.'),
    minLength(5, 'Name field should contain minimum 5 characters')
  ]),
  phone: string('hello', [
    minLength(1, 'Please enter your phone.'),
    custom(isPhoneValid, 'Please enter a valid phone number')
  ]),
  email: string([
    toTrimmed(),
    minLength(1, 'Please enter your email.'),
    email('Please enther a valid email')
  ]),
  comment: string([toTrimmed()])
})

export const OrderNowModal = ({ isModalOpen, toggleModal }: OrderNowModalProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm({ resolver: valibotResolver(UserSchema), mode: 'onBlur' })

  const OrderNowModalPathTroughOptions = {
    root: {
      className:
        'w-[335px] min-h-[582px] bg-light rounded-[15px] relative tablet:w-[440px] tablet:min-h-[632px] tablet:px-10 shadow-none dark:bg-dark'
    },
    content: { className: 'tablet:pl-0 dark:bg-dark overflow-hidden' },
    header: { className: 'pt-[28px] pb-[28px] tablet:pt-10 tablet:pb-10 tablet:pl-0 dark:bg-dark' },
    headerTitle: { className: 'text-fs-18-lh-122-fw-600 text-dark uppercase dark:text-light' },
    closeButton: {
      className: 'w-5 h-5 absolute top-[14px] right-[14px] tablet:w-6 tablet:h-6 tablet:top-4 tablet:right-4'
    },
    closeButtonIcon: { className: 'w-full h-full text-dark dark:text-light' }
  }

  const submit = (data: FieldValues) => console.log(data)

  return (
    <Modal
      isVisible={isModalOpen}
      hide={toggleModal}
      pathTroughOptions={OrderNowModalPathTroughOptions}
      header={<h2>Order now</h2>}>
      <form onSubmit={handleSubmit(submit)}>
        <label className='mb-4 text-fs-14-lh-normal-fw-500 text-dark-50 dark:text-gray-50'>
          Name
          <input
            type='text'
            {...register('name')}
            className='mt-2 block h-[46px] w-[295px] rounded-[15px] border border-dark-20 bg-transparent pl-[14px] text-dark focus:outline-brand dark:border-gray-20 dark:text-white tablet:w-[360px]'
            autoComplete='given-name'
          />
          {errors.name?.message && (
            <small className='mt-[10px] block text-red-600'>{errors.name?.message.toString()}</small>
          )}
        </label>
        <Controller
          name='phone'
          control={control}
          render={({ field }) => (
            <label className='text-fs-14-lh-normal-fw-500 text-dark-50 dark:text-gray-50'>
              Phone number
              <PhoneInput
                defaultCountry='us'
                className='mb-4 mt-2 !w-[295px] tablet:!w-[360px]'
                countrySelectorStyleProps={{
                  buttonClassName:
                    '!bg-transparent !rounded-l-[15px] w-[60px] !h-[46px] !border !border-dark-20 dark:!border-gray-20',
                  dropdownStyleProps: {
                    className:
                      '!bg-light rounded-[15px] !w-[295px] tablet:!w-[360px] dark:!bg-dark border border-dark-20 dark:border-gray-20',
                    listItemCountryNameClassName: 'dark:!text-light',
                    listItemClassName: 'hocus:!bg-gray-20'
                  }
                }}
                inputClassName='!border !border-dark-20 w-full !h-[46px] !bg-transparent !rounded-r-[15px] dark:!border-gray-20 !text-dark dark:!text-white'
                value={field.value}
                onChange={phone => field.onChange(phone)}
              />
              {errors.phone?.message && (
                <small className='mb-2 block text-red-600'>{errors.phone?.message.toString()}</small>
              )}
            </label>
          )}
        />
        <label className='text-fs-14-lh-normal-fw-500 text-dark-50 dark:text-gray-50'>
          Email
          <input
            {...register('email')}
            type='text'
            className='mb-4 mt-2 block h-[46px] w-[295px] rounded-[15px] border border-dark-20 bg-transparent pl-[14px] text-dark focus:outline-brand dark:border-gray-20 dark:text-white tablet:mb-[18px] tablet:w-[360px]'
            autoComplete='email'
          />
          {errors.email?.message && (
            <small className='mb-2 block text-red-600'>{errors.email?.message.toString()}</small>
          )}
        </label>
        <label className='text-fs-14-lh-normal-fw-500 text-dark-50 dark:text-gray-50'>
          Comment
          <textarea
            className='mb-10 mt-2 block h-[100px] w-[295px] resize-none rounded-[15px] border border-dark-20 bg-transparent pl-[14px] pt-[14px] text-dark focus:outline-brand dark:border-gray-20 dark:text-white tablet:w-[360px]'
            {...register('comment')}
          />
        </label>
        <button type='submit' className='btn-send disabled:cursor-not-allowed disabled:opacity-50'>
          Send
        </button>
      </form>
    </Modal>
  )
}
