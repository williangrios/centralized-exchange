'use client'
import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { FaCoins, FaWallet } from 'react-icons/fa'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../sanity/lib/client'
import Image from 'next/image'

interface SendProps {
  selectedToken: any
  thirdWebTokens: any[]
  walletAddress: string
  setAction: any
}

function Send({
  selectedToken,
  setAction,
  thirdWebTokens,
  walletAddress,
}: SendProps) {
  const [amount, setAmount] = useState(0)
  const [recipient, setRecipient] = useState('')
  const [activeThirdWebToken, setActiveThirdWebToken] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [symbol, setSymbol] = useState('')

  useEffect(() => {
    if (selectedToken) {
      const url = imageUrlBuilder(client).image(selectedToken.logo).url()
      setImageUrl(url)
      setSymbol(selectedToken.symbol)
    }
    console.log('selecionado token', selectedToken)
  }, [selectedToken])

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  function handleAmount(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    if (value.length > 5) return
    setAmount(+value)
  }

  return (
    <div className="flex flex-col w-full items-center justify-center max-w-[400px]">
      <div className="flex flex-row gap-2 w-full items-center justify-center">
        <input
          type="number"
          className="text-5xl w-[140px] h-[80px] text-gray-400 bg-black text-right border-none outline-none no-arrows"
          maxLength={5}
          max={99999}
          min={0}
          onChange={(e) => handleAmount(e)}
          value={amount}
        />
        <span className="text-2xl text-violet-600">{symbol}</span>
      </div>
      <p className="text-gray-600 mt-2 text-center italic">
        Amount is a required field
      </p>
      <div className="text-gray-400 flex flex-col gap-2 w-full mt-6">
        <div className="border border-gray-500 rounded-lg flex flex-col gap-4 items-center justify-center w-full p-2">
          <div className="flex flex-row gap-3 items-center justify-center w-full p-2">
            <div className="flex w-[30%]">To</div>
            <div className="flex w-[60%] justify-end">0x</div>
            <div className="flex w-[10%] ">
              <FaWallet />
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center justify-center w-full p-2 ">
            <div className="flex w-[30%]">Pay with</div>
            <div className="flex w-[60%] justify-end"></div>
            <div className="flex w-[10%] ">
              {imageUrl && (
                <Image width={20} height={20} src={imageUrl} alt="coin" />
              )}
            </div>
          </div>
        </div>
        <Button handleClick={() => {}}>Continue</Button>
        <div className="flex w-full mt-2 justify-end">{symbol} Balance: 3</div>
      </div>
    </div>
  )
}

export default Send
