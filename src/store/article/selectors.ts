import { createSelector } from '@reduxjs/toolkit'
import { AppState } from '..'

export const getArticles = (state: AppState) => state.article.articles

export const getFiltered = createSelector(
  (state: AppState) => state.article,
  ({ articles, search }) => articles.filter((article) => article.title.includes(search)),
)
