import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Input } from 'ui/form/input'
import { filterData } from 'store/article'
import { useDebounce } from 'ui/hooks/useDebounce'

import { CreateArticleForm } from './CreateArticleForm'

export const Filter = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const search = useDebounce((value: string) => {
    dispatch(filterData(value))
  }, 500)

  useEffect(() => {
    search(text)
  }, [text])

  return (
    <div>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='py-2 px-4'
        placeholder='Search'
      />
      <div>
        <CreateArticleForm />
      </div>
    </div>
  )
}
