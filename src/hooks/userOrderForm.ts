import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'
import useFormPersist from 'react-hook-form-persist'
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
    progressive: true
  })

  const isWindowDefined = () => {
    if (typeof window !== 'undefined') {
      return window.localStorage
    }
    return undefined
  }

  useFormPersist('order-now-form', { watch, setValue, storage: isWindowDefined() })

  return { register, handleSubmit, control, reset, errors, isValid }
}
