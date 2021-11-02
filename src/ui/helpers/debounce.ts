export const debounce = (fn: (...args: any[]) => void, delay?: number) => {
  let timeout = -1

  return (...args: any[]) => {
    if (timeout !== -1) {
      clearTimeout(timeout)
    }

    timeout = window.setTimeout(fn, delay, args)
  }
}
