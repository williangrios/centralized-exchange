'use client'
import React, { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../sanity/lib/client'
import Image from 'next/image'
import { FaCheck, FaCopy } from 'react-icons/fa'
import { Menu } from './TransferModal'

interface ReceiveProps {
  setAction: (newValue: Menu) => void
  selectedToken: any
  walletAddress: string
}

function Receive({ selectedToken, setAction, walletAddress }: ReceiveProps) {
  const [imageUrl, setImageUrl] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (selectedToken?.logo) {
      const url = imageUrlBuilder(client).image(selectedToken.logo).url()
      setImageUrl(url)
    }
  }, [selectedToken.logo])

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center border border-gray-500 gap-2 p-4 rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${walletAddress}`}
          alt="QR Code"
        />
        <div className="flex gap-2 items-center w-full justify-start mt-2">
          <Image width={20} height={20} src={imageUrl} alt="coin" />
          <p className="">{selectedToken.name}</p>
        </div>
        <p className="font-bold mt-2 w-full text-start">
          {selectedToken.name} Address
        </p>
        <div className="flex gap-2 items-center w-full justify-start">
          <p className="">{walletAddress}</p>
          {!copied ? (
            <FaCopy
              className="cursor-pointer hover:text-gray-400"
              onClick={() => {
                navigator.clipboard.writeText(walletAddress)
                setCopied(true)
              }}
            />
          ) : (
            <FaCheck />
          )}
        </div>
      </div>
    </div>
  )
}

export default Receive
