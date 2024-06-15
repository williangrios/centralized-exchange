import Link from 'next/link'
import React from 'react'

function News() {
  const news = [
    {
      title: 'title',
      description: 'description',
      link: 'link',
    },
    {
      title: 'title 2',
      description: 'description',
      link: 'link',
    },
  ]
  return (
    <div className="flex flex-col gap-2 w-full">
      {news.map((news) => {
        return (
          <div
            key={news.title}
            className="flex flex-col gap-2 p-3 border-gray-200 border rounded-lg"
          >
            <h3 className="font-bold text-gray-300">{news.title}</h3>
            <h4 className="text-gray-400">{news.description}</h4>
            <Link href={news.link} />
          </div>
        )
      })}
    </div>
  )
}

export default News
