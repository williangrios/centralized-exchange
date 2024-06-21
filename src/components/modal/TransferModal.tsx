'use client'
import React, { useState } from 'react'
import Send from './Send'
import Receive from './Receive'
import CoinSelector from './CoinSelector'
import Button from '../Button'
import Link from 'next/link'

interface TransferModalProps {
  sanityTokens: any[]
  thirdWebTokens: any[]
  walletAddress: string
}

export type Menu =
  | 'Send'
  | 'Receive'
  | 'SelectToken'
  | 'Transferred'
  | 'Transfering'
  | 'Select'

function TransferModal({
  sanityTokens,
  thirdWebTokens,
  walletAddress,
}: TransferModalProps): JSX.Element {
  const [action, setAction] = useState<Menu>('Send')
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0])

  if (action === 'Transferred') {
    return (
      <div className="flex w-full h-[100vh] justify-center items-center">
        <div className="flex flex-col p-2 w-[80%] lg:w-[50%] h-[70%] justify-center items-center bg-black rounded-xl gap-3 shadow-xl shadow-black">
          <p className="">Transfer successfull</p>
          <Button handleClick={() => setAction('Send')}>Transfer more</Button>
        </div>
      </div>
    )
  }

  if (action === 'Transfering') {
    return (
      <div className="flex w-full h-[100vh] justify-center items-center">
        <div className="flex flex-col p-2 w-[80%] lg:w-[50%] h-[70%] justify-center items-center bg-black rounded-xl gap-3 shadow-xl shadow-black">
          <p className="">Please wait....</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col w-full h-[100vh] justify-center items-center">
      <div className="w-[90%] lg:w-[50%] flex justify-end mb-3">
        <Link
          className="flex items-center w-10 h-10 justify-center rounded-full bg-black text-gray-200 hover:bg-gray-900 cursor-pointer hover:text-gray-300"
          href="/"
        >
          X
        </Link>
      </div>
      <div className="w-[90%] lg:w-[50%] h-[70%] bg-black rounded-xl flex flex-col gap-3 shadow-xl shadow-black">
        <div className="flex flex-col gap-4 w-full items-center justify-center h-full">
          <div className="flex w-full">
            <div
              className={`flex items-center h-[50px] justify-center w-[50%] rounded-tl-xl ${action === 'Send' ? 'border-r text-violet-500 bg-black' : 'border-b border-gray-500 cursor-pointer hover:bg-gray-900 '}`}
              onClick={() => setAction('Send')}
            >
              <p className="">Send</p>
            </div>
            <div
              className={`flex items-center h-[50px] justify-center w-[50%] rounded-tr-xl ${action === 'Receive' ? 'border-l text-violet-500 bg-black' : 'border-b border-gray-500 cursor-pointer hover:bg-gray-900 '}`}
              onClick={() => setAction('Receive')}
            >
              <p className="">Receive</p>
            </div>
          </div>
          <div className="p-4 flex w-full items-center justify-center h-full">
            {action === 'Send' ? (
              <Send
                selectedToken={selectedToken}
                setAction={setAction}
                thirdWebTokens={thirdWebTokens}
                walletAddress={walletAddress}
              />
            ) : action === 'Receive' ? (
              <Receive
                selectedToken={selectedToken}
                setAction={setAction}
                walletAddress={walletAddress}
              />
            ) : (
              <CoinSelector
                setAction={setAction}
                selectedToken={selectedToken}
                setSelectedToken={setSelectedToken}
                sanityTokens={sanityTokens}
                thirdWebTokens={thirdWebTokens}
                walletAddress={walletAddress}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransferModal
