import { custom, email, minLength, object, optional, string, toTrimmed, type Input } from 'valibot'
import { isPhoneValid } from './helpers/isPhoneValid'

export const orderSchema = object({
  name: string([toTrimmed(), minLength(5, 'Please enter at least 5 characters.')]),
  phone: string([custom(isPhoneValid, 'Please enter a valid phone number.')]),
  email: string([toTrimmed(), email('Please enter a valid email.')]),
  comment: optional(string([toTrimmed()]))
})

export type Data = Input<typeof orderSchema>
