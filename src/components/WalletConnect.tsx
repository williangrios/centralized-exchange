'use client'
import { createThirdwebClient } from 'thirdweb'
import {
  useActiveWallet,
  useActiveWalletConnectionStatus,
  useConnect,
  useWalletInfo,
} from 'thirdweb/react'
import { createWallet } from 'thirdweb/wallets'
import Button from './Button'

function WalletConnect() {
  const { connect, isConnecting, error } = useConnect()
  const wallet = useActiveWallet()
  const status = useActiveWalletConnectionStatus()

  function handleConnect() {
    connect(async () => {
      const client = createThirdwebClient({ clientId: '...' })
      const wallet = createWallet('io.metamask')
      await wallet.connect({ client })
      return wallet
    })
  }

  return (
    <div className="flex flex-col gap-3">
      {status === 'connected' ? (
        <>{wallet?.getAccount()?.address ?? 'nao conectado'}</>
      ) : (
        <div className="flex flex-col gap-3">
          {status === 'connecting' ? (
            <p>Aguarde...</p>
          ) : (
            <>
              <Button handleClick={handleConnect}>Connect wallet</Button>
              <p>You need Chrome to run this app</p>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default WalletConnect
