import { ErrorMessage } from '@hookform/error-message'
import { ForwardedRef, forwardRef } from 'react'
import { FieldErrors } from 'react-hook-form'

type Field = {
  errors?: FieldErrors
  labelName: string
  autoComplete?: string
  isTextArea?: boolean
}

export const Field = forwardRef(
  ({ labelName, isTextArea, errors, ...rest }: Field, ref: ForwardedRef<HTMLInputElement>) => (
    <label className='mb-4 block text-fs-14-lh-normal-fw-500 text-dark-50 dark:text-gray-50 tablet:mb-[18px]'>
      {labelName}
      {isTextArea ? (
        <textarea className='mb-10 mt-2 block h-[100px] w-[295px] resize-none rounded-[15px] border border-dark-20 bg-transparent pl-[14px] pt-[14px] text-fs-16-lh-125-fw-500 text-dark focus:outline-brand dark:border-gray-20 dark:text-white tablet:w-[360px]' />
      ) : (
        <>
          <input
            type='text'
            {...rest}
            className='mt-2 block h-[46px] w-[295px] rounded-[15px] border border-dark-20 bg-transparent pl-[14px] text-fs-16-lh-125-fw-500 text-dark autofill:bg-clip-text focus:outline-brand dark:border-gray-20 dark:text-white tablet:w-[360px]'
            ref={ref}
          />
          <ErrorMessage
            errors={errors}
            name={labelName.toLowerCase()}
            render={({ message }) => <div className='mb-2 mt-2 text-red-600'>{message}</div>}
          />
        </>
      )}
    </label>
  )
)

Field.displayName = 'Field'
