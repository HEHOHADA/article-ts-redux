import { createAction } from '@reduxjs/toolkit'
import { ArticleItem } from '.'

export const removeArticle = createAction<number>('article/removeArticle')

export const addArticle = createAction<string>('article/addArticle')

export const setData = createAction<ArticleItem[]>('article/setData')

export const filterData = createAction<string>('article/filterData')
