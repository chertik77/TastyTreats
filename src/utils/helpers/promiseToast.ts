import { type ExternalToast, toast } from 'sonner'

type PromiseData<ToastData = unknown> = ExternalToast & {
  error: ((error: Error) => string) | string
  loading: string
  success: ((data: ToastData) => string) | string
}

export const promiseToast = (
  promise: Promise<unknown>,
  options: PromiseData<unknown>
) => toast.promise(promise, options)
