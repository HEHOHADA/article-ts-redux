import React from 'react'

export const Loader = () => {
  return (
    <div>
      <div className='bg-blue-600 p-2 w-4 h-4 rounded-full animate-bounce blue-circle' />
      <div className='bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce green-circle' />
      <div className='bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce red-circle' />
    </div>
  )
}
