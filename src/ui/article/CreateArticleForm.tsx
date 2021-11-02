import React, { FormEvent, memo, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Input } from 'ui/form/input'
import { Button } from 'ui/form/button'
import { addArticle } from 'store/article'

export const CreateArticleForm = memo(() => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addArticle(title))
    setTitle('')
  }

  return (
    <form className='items-center py-1.5 flex-col' onSubmit={onSubmit}>
      <div className='mt-4'>
        <label htmlFor='title'>Title</label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id='title'
          className='py-2 px-4'
          required
          minLength={10}
          placeholder='Title'
        />
      </div>
      <div className='mt-3'>
        <Button className='py-2 px-4' type='submit' text='Create' />
      </div>
    </form>
  )
})

CreateArticleForm.displayName = 'CreateArticleForm'
