import React from 'react'

const Button = ({
    children,
    type = "button",
    bgColor = 'bg-orange-600',
    textColor = 'text-white',
    className = "",
    ...props

}) => {
  return (
    <button className={`px-3 py-1 rounded-lg ${bgColor} ${textColor} ${className}`} type={type} {...props}>
        {children}
    </button>
  )
}

export default Button
