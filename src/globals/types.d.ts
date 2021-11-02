import { AppDispatch, AppState } from '../store'

declare module 'react-redux' {
  export function useDispatch<T extends AppDispatch = AppDispatch>(): T
  export function useSelector<T extends AppState = AppState>(): T
}
