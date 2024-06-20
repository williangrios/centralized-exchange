'use client'
import WalletConnect from '@/components/WalletConnect'
import { useActiveWallet } from 'thirdweb/react'
import Dashboard from './(pages)/dashboard/page'

export default function Home() {
  const wallet = useActiveWallet()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!wallet ? <WalletConnect /> : <Dashboard wallet={wallet} />}
    </main>
  )
}
