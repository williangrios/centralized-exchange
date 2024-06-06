import React from 'react'
import btcLogo from '../../public/assets/btc.png'
import ethLogo from '../../public/assets/eth.png'
import solLogo from '../../public/assets/sol.png'
import Image from 'next/image'
import { BsThreeDotsVertical } from 'react-icons/bs'

function Portfolio() {
  const coins = [
    {
      name: 'Bitcoin',
      sign: 'BTC',
      logo: btcLogo,
      balanceUsd: 230,
      balanceCoin: 6.55,
      priceUsd: 5.32,
      change: -2.3,
      allocation: 3,
    },
    {
      name: 'Ethereum',
      sign: 'ETH',
      logo: ethLogo,
      balanceUsd: 230,
      balanceCoin: 6.55,
      priceUsd: 5.32,
      change: -2.3,
      allocation: 3,
    },
    {
      name: 'Solana',
      sign: 'SOL',
      logo: solLogo,
      balanceUsd: 230,
      balanceCoin: 6.55,
      priceUsd: 5.32,
      change: 3,
      allocation: 3,
    },
  ]
  return (
    <div className="border border-gray-200 rounded-lg p-3">
      <h2>Your assets</h2>
      <table className="rounded-3xl overflow-hidden w-full">
        <thead className="bg-secondary-color-medium font-bold text-sm w-full">
          <tr className="w-full text-start">
            <th></th>
            <th className="text-start">Coin</th>
            <th className="text-start">Balance</th>
            <th className="text-start">Price</th>
            <th className="text-start">Allocation</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="w-full">
          {coins.map((coin, i) => {
            return (
              <tr key={i} className="w-full border-t border-gray-300">
                <td className="flex justify-center">
                  <Image
                    width={45}
                    objectFit="contain"
                    height={45}
                    src={coin.logo}
                    alt={coin.name}
                    className="my-4"
                  />
                </td>
                <td>
                  <p className="text-gray-300">{coin.name}</p>
                  <p className="text-gray-600">{coin.sign}</p>
                </td>
                <td>
                  <p className="text-gray-300">${coin.priceUsd}</p>
                  <p className="text-gray-300">
                    {coin.balanceCoin}-{coin.sign}
                  </p>
                </td>
                <td>
                  <p className="text-gray-300">{coin.allocation}</p>
                  <p
                    className={
                      coin.change < 0 ? 'text-red-500' : 'text-green-600'
                    }
                  >
                    {coin.change}%
                  </p>
                </td>
                <td>
                  <p className="text-gray-300">{coin.allocation}%</p>
                </td>
                <td>
                  <BsThreeDotsVertical />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Portfolio
