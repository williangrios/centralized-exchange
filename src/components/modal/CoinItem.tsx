'use client'
import React from 'react'
import { Menu } from './TransferModal'

interface CoinItemProps {
  key: number
  token: any
  setSelectedToken: (newValue: any) => void
  setAction: (newValue: Menu) => void
}

function CoinItem({ key, token, setSelectedToken, setAction }: CoinItemProps) {
  const handleSelectToken = (token: any) => {
    setSelectedToken(token)
    setAction('Send')
  }

  return (
    <div
      key={key}
      className="flex flex-row w-full cursor-pointer hover:text-gray-200 p-2 rounded-lg hover:bg-gray-900 gap-2"
      onClick={() => handleSelectToken(token)}
    >
      <p className="p-2">{token.name}</p>
    </div>
  )
}

export default CoinItem
