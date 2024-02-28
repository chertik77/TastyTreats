import type { OrderSchemaFields } from '@/utils/order-schema'

import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'
import useFormPersist from 'react-hook-form-persist'

import { orderSchema } from '@/utils/order-schema'

export const useOrderForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
    watch
  } = useForm<OrderSchemaFields>({
    defaultValues: { email: '', name: '', phone: '' },
    mode: 'onChange',
    progressive: true,
    resolver: valibotResolver(orderSchema)
  })

  const isLocalStorageDefined = () => {
    if (typeof window !== 'undefined') {
      return window.localStorage
    }
  }

  useFormPersist('order-now-form', {
    watch,
    setValue,
    storage: isLocalStorageDefined()
  })

  return { control, errors, handleSubmit, register, reset }
}
