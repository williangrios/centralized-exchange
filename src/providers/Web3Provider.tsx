'use client'
import React, { ReactNode } from 'react'
import { ThirdwebProvider } from 'thirdweb/react'

function Web3Provider({ children }: { children: ReactNode }) {
  // acho que faltam algumas configurações aqui
  return <ThirdwebProvider>{children}</ThirdwebProvider>
}

export default Web3Provider
