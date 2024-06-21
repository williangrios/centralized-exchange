'use client'
import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { FaWallet } from 'react-icons/fa'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../sanity/lib/client'
import Image from 'next/image'
import { sdk, sdkSigner } from '@/lib/thirdWeb'
import { Menu } from './TransferModal'

interface SendProps {
  selectedToken: any
  thirdWebTokens: any[]
  walletAddress: string
  setAction: (newValue: Menu) => void
}

function Send({
  selectedToken,
  setAction,
  thirdWebTokens,
  walletAddress,
}: SendProps) {
  const [amount, setAmount] = useState(0)
  const [recipient, setRecipient] = useState('0x')
  const [balance, setBalance] = useState('...')
  const [activeThirdWebToken, setActiveThirdWebToken]: any = useState()
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (selectedToken) {
      const url = imageUrlBuilder(client).image(selectedToken.logo).url()
      setImageUrl(url)
    }
  }, [selectedToken])

  useEffect(() => {
    const activeToken = thirdWebTokens.find(
      (token) => token.address === selectedToken.contractAddress
    )
    setActiveThirdWebToken(activeToken)
  }, [selectedToken, thirdWebTokens])

  useEffect(() => {
    const getBalance = async () => {
      const contract = await sdk.getContract(activeThirdWebToken.address)
      const balance = await contract.erc20.balanceOf(walletAddress)
      setBalance(balance.displayValue)
    }
    if (activeThirdWebToken) {
      getBalance()
    }
  }, [activeThirdWebToken, walletAddress])

  function handleAmount(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    if (value.length > 5) return
    setAmount(+value)
  }

  const sendCrypto = async () => {
    if (activeThirdWebToken && amount && recipient) {
      setAction('Transfering')
      const data = await sdkSigner.wallet.transfer(
        recipient,
        amount,
        activeThirdWebToken.address
      )
      setAction('Transferred')
    } else {
    }
  }

  if (!thirdWebTokens ?? !selectedToken) {
    return <div className="flex items-center justify-center">...</div>
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
        <span className="text-2xl text-violet-600">
          {selectedToken?.symbol}
        </span>
      </div>
      <p className="text-gray-600 mt-2 text-center italic">
        Amount is a required field
      </p>
      <div className="text-gray-400 flex flex-col gap-2 w-full mt-6">
        <div className="border border-gray-500 rounded-lg flex flex-col gap-4 items-center justify-center w-full p-2">
          <div className="flex flex-row gap-3 items-center justify-center w-full p-2">
            <div className="flex w-[30%]">To</div>
            <div className="flex w-[60%] justify-end">
              <input
                type="text"
                value={recipient}
                className="bg-black text-right border border-gray-500 rounded-md px-2"
                onChange={(e) => setRecipient(e.target.value)}
              />
            </div>
            <div className="flex w-[10%] ">
              <FaWallet />
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center justify-center w-full p-2 ">
            <div className="flex w-[30%]">Pay with</div>
            <div
              className="flex w-[60%] justify-end cursor-pointer"
              onClick={() => setAction('Select')}
            >
              {selectedToken?.name}
            </div>
            <div
              className="flex w-[10%] cursor-pointer"
              onClick={() => setAction('Select')}
            >
              {imageUrl && (
                <Image width={20} height={20} src={imageUrl} alt="coin" />
              )}
            </div>
          </div>
        </div>
        <Button
          handleClick={() => {
            sendCrypto()
          }}
        >
          Send
        </Button>
        <div className="flex w-full mt-2 justify-end">
          {selectedToken?.name} Balance: {balance} {selectedToken?.symbol}
        </div>
      </div>
    </div>
  )
}

export default Send
