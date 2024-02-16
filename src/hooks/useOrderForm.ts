import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'
import useFormPersist from 'react-hook-form-persist'
import { isLocalStorageDefined } from 'utils/helpers/isLocalStorageDefined'
import { orderSchema, type Data } from 'utils/schema'

export const useOrderForm = () => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    register,
    reset,
    setValue,
    watch
  } = useForm<Data>({
    defaultValues: { email: '', name: '', phone: '' },
    mode: 'onChange',
    progressive: true,
    resolver: valibotResolver(orderSchema, { abortEarly: true })
  })

  useFormPersist('order-now-form', {
    setValue,
    storage: isLocalStorageDefined(),
    watch
  })

  return { control, errors, handleSubmit, isValid, register, reset }
}
