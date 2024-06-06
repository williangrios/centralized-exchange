import React from 'react'
import Button from './Button'

function Header() {
  return (
    <div className="flex justify-between items-center w-full border-b border-gray-200 pb-3">
      <h1 className="text-3xl">Assets</h1>
      <div className="flex gap-2">
        <Button handleClick={() => {}}>Buy/Sell</Button>
        <Button handleClick={() => {}}>Send/Receive</Button>
      </div>
    </div>
  )
}

export default Header
