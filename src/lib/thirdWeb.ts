import { ThirdwebSDK } from '@thirdweb-dev/sdk'

export const sdk = new ThirdwebSDK('https://11155420.rpc.thirdweb.com', {
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
})

export const sdkSigner = ThirdwebSDK.fromPrivateKey(
  process.env.NEXT_PUBLIC_METAMASK_KEY!,
  'https://11155420.rpc.thirdweb.com',
  {
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
  }
)
