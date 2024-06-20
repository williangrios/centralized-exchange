'use client'
import Portfolio from '@/components/Portfolio'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import React, { useEffect, useMemo, useState } from 'react'
import { Wallet } from 'thirdweb/wallets'
import BalanceChart from '@/components/BalanceChart'
import News from '@/components/News'
import { ethers } from 'ethers'
import { createThirdwebClient, getContract } from 'thirdweb'
import { optimismSepolia } from 'thirdweb/chains'

interface DashboardProps {
  wallet: Wallet | undefined
}

function Dashboard({ wallet }: DashboardProps) {
  const [sanityTokens, setSanityTokens]: any[] = useState([])
  const [thirdwebTokens, setThirdwebTokens]: any[] = useState([])
  const walletAddress = useMemo(() => {
    return wallet?.getAccount()?.address ?? 'not connected'
  }, [wallet])

  useEffect(() => {
    const getCoins = async () => {
      const responseSanityCoins = await fetch(
        'https://4d1iux7e.api.sanity.io/v2024-06-04/data/query/production?query=*%5B_type%3D%3D%27coins%27%5D+%7B%0A++name%2C%0A++usdPrice%2C%0A++contractAddress%2C%0A++symbol%2C%0A++logo%0A%7D'
      )
      const tempSanityTokens = await responseSanityCoins.json()
      setSanityTokens(tempSanityTokens.result)
      const key = process.env.NEXT_PUBLIC_METAMASK_KEY!
      const provider = process.env.NEXT_PUBLIC_PROVIDER!
      const wallet = new ethers.Wallet(key, ethers.getDefaultProvider(provider))
      let tempThirdWebTokens = []
      for (const token of tempSanityTokens.result) {
        try {
          const client = createThirdwebClient({
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
          })
          const contract = getContract({
            client,
            chain: optimismSepolia,
            address: token.contractAddress,
          })
          tempThirdWebTokens.push(contract)
        } catch (error) {
          console.error(`Erro ao obter o contrato para ${token.name}:`, error)
        }
      }
      setThirdwebTokens(tempThirdWebTokens)
    }
    getCoins()
  }, [])

  return (
    <div className="flex w-full">
      <SideBar />
      <div className="flex flex-col w-full gap-2 ">
        <Header
          sanityTokens={sanityTokens}
          thirdwebTokens={thirdwebTokens}
          walletAddress={walletAddress}
        />
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="flex flex-col gap-2 w-full lg:w-[70%]">
            <BalanceChart
              sanityTokens={sanityTokens}
              walletAddress={walletAddress}
              thirdwebTokens={thirdwebTokens}
            />
            <Portfolio
              sanityTokens={sanityTokens}
              walletAddress={walletAddress}
              thirdwebTokens={thirdwebTokens}
            />
          </div>
          <div className="flex flex-col w-full lg:w-[30%]">
            <News />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
