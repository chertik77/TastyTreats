import type { Input } from 'valibot'

import {
  custom,
  email,
  minLength,
  object,
  optional,
  string,
  toTrimmed
} from 'valibot'

import { isPhoneValid } from './functions/isPhoneValid'

export const orderSchema = object({
  comment: optional(string([toTrimmed()])),
  email: string([toTrimmed(), email('Please enter a valid email.')]),
  name: string([
    toTrimmed(),
    minLength(5, 'Please enter at least 5 characters.')
  ]),
  phone: string([custom(isPhoneValid, 'Please enter a valid phone number.')])
})

export type OrderSchemaFields = Input<typeof orderSchema>
