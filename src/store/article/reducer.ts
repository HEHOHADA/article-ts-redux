import { createSlice } from '@reduxjs/toolkit'
import { addArticle, filterData, removeArticle, setData } from './actions'

export type ArticleItem = {
  id: number
  title: string
  date: string
}

type ArticleInitialState = {
  articles: ArticleItem[]
  search: string
}

const initialState: ArticleInitialState = {
  articles: [],
  search: '',
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setData, (state, args) => ({
        ...state,
        articles: args.payload,
      }))
      .addCase(filterData, (state, args) => {
        return {
          ...state,
          search: args.payload,
        }
      })
      .addCase(removeArticle, (state, args) => {
        return {
          ...state,
          articles: state.articles.filter((article) => article.id !== args.payload),
        }
      })
      .addCase(addArticle, (state, args) => {
        state.articles.unshift({
          id: state.articles.length + 1,
          title: args.payload,
          date: String(Date.now()),
        })
      })
  },
})
