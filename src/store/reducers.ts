import { articleSlice } from './article'

export const reducers = {
  [articleSlice.name]: articleSlice.reducer,
}
