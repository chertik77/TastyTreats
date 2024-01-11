import { ExternalToast, toast } from 'sonner'

type PromiseData<ToastData = unknown> = ExternalToast & {
  loading: string
  success: string | ((data: ToastData) => string)
  error: string | ((error: Error) => string)
}

export const promiseToast = (promise: Promise<unknown>, options: PromiseData<unknown>) =>
  toast.promise(promise, options)
