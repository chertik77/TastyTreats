import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'
import useFormPersist from 'react-hook-form-persist'
import { isLocalStorageDefined } from 'utils/helpers/isLocalStorageDefined'
import { orderSchema, type Data } from 'utils/schema'

export const useOrderForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors, isValid }
  } = useForm<Data>({
    defaultValues: { phone: '', email: '', name: '' },
    resolver: valibotResolver(orderSchema, { abortEarly: true }),
    mode: 'onChange',
    progressive: true
  })

  useFormPersist('order-now-form', { watch, setValue, storage: isLocalStorageDefined() })

  return { register, handleSubmit, control, reset, errors, isValid }
}
