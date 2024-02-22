import type { OrderSchemaFields } from '@/utils/schema'
import type { Control } from 'react-hook-form'

import { ErrorMessage } from '@hookform/error-message'
import { Controller } from 'react-hook-form'
import { PhoneInput } from 'react-international-phone'

import 'react-international-phone/style.css'

export const PhoneField = ({
  control
}: {
  control: Control<OrderSchemaFields>
}) => (
  <Controller
    control={control}
    name='phone'
    render={({ field, formState: { errors } }) => (
      <label
        className='mb-4 block text-fs-14-lh-normal-fw-500 text-dark-50 dark:text-gray-50
          tablet:mb-[18px]'>
        Phone number
        <PhoneInput
          // hideDropdown
          className='mt-2 !w-[295px] tablet:!w-[360px]'
          countrySelectorStyleProps={{
            buttonClassName:
              '!bg-transparent !rounded-l-[15px] w-[60px] !h-[46px] !border !border-dark-20 dark:!border-gray-20',
            buttonContentWrapperClassName: 'gap-0.5',
            dropdownStyleProps: {
              className:
                '!bg-light rounded-[15px] !w-[295px] tablet:!w-[360px] dark:!bg-dark border border-dark-20 dark:border-gray-20 dark:shadow-phone-select-dark',
              listItemClassName: 'hocus:!bg-gray-20',
              listItemCountryNameClassName: 'dark:!text-light'
            }
          }}
          defaultCountry='us'
          inputClassName='!border !border-dark-20 w-full !h-[46px] !bg-transparent !rounded-r-[15px] dark:!border-gray-20 !text-dark dark:!text-white !text-fs-16-lh-125-fw-500 autofill:bg-transparent'
          onChange={phone => field.onChange(phone)}
          value={field.value}
        />
        <ErrorMessage
          errors={errors}
          name='phone'
          render={({ message }) => (
            <div className='my-2 text-red-600'>{message}</div>
          )}
        />
      </label>
    )}
  />
)
