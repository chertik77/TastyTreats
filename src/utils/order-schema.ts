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
  email: string([
    toTrimmed(),
    minLength(1, 'This field is required.'),
    email('Please enter a valid email.')
  ]),
  name: string([
    toTrimmed(),
    minLength(1, 'This field is required.'),
    minLength(5, 'Please enter at least 5 characters.')
  ]),
  phone: string([
    minLength(3, 'This field is required.'),
    custom(isPhoneValid, 'Please enter a valid phone number.')
  ])
})

export type OrderSchemaFields = Input<typeof orderSchema>
