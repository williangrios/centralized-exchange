'use client'
import Portfolio from '@/components/Portfolio'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import React from 'react'
import { Wallet } from 'thirdweb/wallets'

interface DashboardProps {
  wallet: Wallet | undefined
}

function Dashboard({ wallet }: DashboardProps) {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="flex flex-col w-full gap-2 ">
        <Header />
        <Portfolio />
      </div>
      {/* {wallet?.getAccount()?.address} */}
    </div>
  )
}

export default Dashboard
