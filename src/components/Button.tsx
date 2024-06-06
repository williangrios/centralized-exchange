import React from 'react'

interface ButtonProps {
  children: string
  handleClick: () => void
}

function Button({ children, handleClick }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className="px-3 py-2 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 border border-white"
    >
      {children}
    </button>
  )
}

export default Button
