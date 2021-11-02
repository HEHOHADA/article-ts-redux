import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { getFiltered } from 'store/article'
import { Article } from './Article'
import { Loader } from 'ui/blocks/Loader'

export const Articles = memo(() => {
  const filteredData = useSelector(getFiltered)

  return (
    <div className='w-4/5 bg-white overflow-y-auto'>
      {filteredData.length ? (
        filteredData.map((article) => <Article key={article.id} {...article} />)
      ) : (
        <div className='w-full flex items-center justify-center bg-gray-700 h-full'>
          <Loader />
        </div>
      )}
    </div>
  )
})

Articles.displayName = 'Articles'
