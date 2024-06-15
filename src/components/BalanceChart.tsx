'use client'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { CategoryScale, LinearScale } from 'chart.js/auto'

import React from 'react'

interface BalanceChartProps {
  sanityTokens: any[]
  thirdwebTokens: any[]
  walletAddress: string
}

function BalanceChart({
  sanityTokens,
  thirdwebTokens,
  walletAddress,
}: BalanceChartProps) {
  const data = {
    labels: [
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Noz',
      'Dec',
      'Jan',
    ],
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#3773f5',
        borderColor: '#3773f5',
        // borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        // borderJoinStyle: 'miter',
        pointBorderColor: '#3773f5',
        pointBackgroundColor: '#3773f5',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#3773f5',
        pointHoverBorderColor: '#3773f5',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 42],
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      CategoryScale,
      LinearScale,
    },
  }

  return (
    <div className="border border-gray-200 rounded-lg p-3">
      <h2>Your assets</h2>
      <Line data={data} options={options} width={400} height={150} />
    </div>
  )
}

export default BalanceChart
