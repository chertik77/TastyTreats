export const isLocalStorageDefined = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage
  }
}
