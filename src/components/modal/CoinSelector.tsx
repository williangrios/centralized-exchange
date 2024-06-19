'use client'
import React from 'react'
import CoinItem from './CoinItem'
import { Menu } from './TransferModal'

interface CoinSelectorProps {
  setAction: (newValue: Menu) => void
  selectedToken: string
  setSelectedToken: (newValue: string) => void
  sanityTokens: any[]
  thirdWebTokens: any[]
  walletAddress: string
}

function CoinSelector({
  setAction,
  setSelectedToken,
  sanityTokens,
}: CoinSelectorProps) {
  return (
    <div className="h-full flex w-full flex-col gap-2 items-start justify-start">
      <h2 className="text-2xl flex w-full justify-center ">Select Asset</h2>
      <div className="flex flex-col gap-2 w-full">
        {sanityTokens.map((token, index) => (
          <CoinItem
            setAction={setAction}
            setSelectedToken={setSelectedToken}
            key={index}
            token={token}
          />
        ))}
      </div>
    </div>
  )
}

export default CoinSelector
