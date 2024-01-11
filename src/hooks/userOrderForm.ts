import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'
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
    resolver: valibotResolver(orderSchema),
    mode: 'onChange',
    defaultValues: { phone: '' },
    progressive: true
  })

  // useFormPersist('order-now-form', { watch, setValue, storage: window.localStorage })

  return { register, handleSubmit, control, reset, errors, isValid }
}
