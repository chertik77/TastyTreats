import { usePathname, useRouter } from 'next/navigation'

export const useClearSearchParams = () => {
  const router = useRouter()
  const pathname = usePathname()

  return () => router.replace(pathname)
}
