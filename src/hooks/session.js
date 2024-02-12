import { useLocalForage } from '@zikwall/use-localforage'

export function useSession() {
  return useLocalForage('session')
}
