'use client'
import React, { useState } from 'react'
import Send from './Send'
import Receive from './Receive'

interface TransferModalProps {
  sanityTokens: any[]
  thirdWebTokens: any[]
  walletAddress: string
}

function TransferModal({
  sanityTokens,
  thirdWebTokens,
  walletAddress,
}: TransferModalProps): JSX.Element {
  type Menu = 'Send' | 'Receive'

  const [action, setAction] = useState<Menu>('Send')
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0])

  return (
    <div className="flex w-full h-[100vh] justify-center items-center">
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
            ) : (
              <Receive />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransferModal
