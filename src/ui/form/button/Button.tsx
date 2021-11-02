import React, { FC, ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string
}

export const Button: FC<ButtonProps> = (props) => {
  const { text, type = 'button', children, className, ...other } = props
  const setClassName = `flex-shrink-0 bg-blue-900 text-white text-base py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 ${
    className || ''
  }`

  return (
    <button type={type} className={setClassName} {...other}>
      {text ?? children}
    </button>
  )
}
