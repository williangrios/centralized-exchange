'use client'
import React from 'react'
import Button from './Button'
import Modal from 'react-modal'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import TransferModal from './modal/TransferModal'

interface HeaderProps {
  sanityTokens: any[]
  thirdwebTokens: any[]
  walletAddress: string
}

function Header({ sanityTokens, thirdwebTokens, walletAddress }: HeaderProps) {
  const searchParams = useSearchParams()
  return (
    <div className="flex justify-between items-center w-full border-b border-gray-200 pb-3 ">
      <h1 className="text-3xl">Assets</h1>
      <div className="flex gap-2">
        <div className="flex flex-col border border-green-800 rounded-full py-1 px-3 items-center">
          <p className="text-center">Your wallet</p>
          <p className="text-center">
            {walletAddress.slice(0, 6)}...{walletAddress.slice(36)}
          </p>
        </div>
        <Button handleClick={() => {}}>Buy/Sell</Button>
        <Link href={'/?transfer=1'}>
          <Button handleClick={() => {}}>Send/Receive</Button>
        </Link>
      </div>
      <Modal
        isOpen={searchParams.toString() == 'transfer=1'}
        className="bg-transparent"
        onRequestClose={() => {
          redirect('/')
        }}
      >
        <TransferModal
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdwebTokens}
          walletAddress={walletAddress}
        />
      </Modal>
    </div>
  )
}

export default Header
