import { useRef } from 'react'
import { debounce } from '../helpers/debounce'

export const useDebounce = (callback: any, wait?: number) => {
  const debounced = useRef(debounce(callback, wait))
  return debounced.current
}
