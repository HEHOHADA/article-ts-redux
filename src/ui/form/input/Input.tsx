import React, { forwardRef, InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...other } = props
  const additionalClass = `bg-gray-700 border-none text-white placeholder-gray-400 focus:outline-none border shadow-md rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${className}`

  return (
    <div>
      <input className={additionalClass} ref={ref} {...other} />
    </div>
  )
})

Input.displayName = 'Input'
