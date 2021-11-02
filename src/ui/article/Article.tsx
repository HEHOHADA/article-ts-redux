import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { dateFormat } from 'ui/helpers/date'
import { RemoveIcon } from 'ui/icons/RemoveIcon'
import { ArticleItem, removeArticle } from 'store/article'

export const Article: FC<ArticleItem> = (props) => {
  const { date, title, id } = props
  const dispatch = useDispatch()

  return (
    <figure className='bg-gray-700 p-4 flex border border-gray-900 shadow-sm items-center'>
      <div className='pt-6 space-y-4 flex-1'>
        <blockquote>
          <p className='text-lg'>{title}</p>
        </blockquote>
        <figcaption>
          <div>{dateFormat(date)}</div>
        </figcaption>
      </div>
      <button
        className='w-10 h-10'
        type='button'
        onClick={() => dispatch(removeArticle(id))}>
        <RemoveIcon />
      </button>
    </figure>
  )
}
