export const throttle = (fn: (...args: any[]) => void, delay: number) => {
  let lastCalled = 0

  return (...args: any[]) => {
    const now = new Date().getTime()
    if (now - lastCalled < delay) {
      return
    }
    lastCalled = now

    return fn(...args)
  }
}
