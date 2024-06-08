import React, { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { GiTrade } from 'react-icons/gi'
import { MdPayment } from 'react-icons/md'
import { TbAsset } from 'react-icons/tb'

function SideBar() {
  const menuItems = [
    {
      title: 'Assets',
      icon: <TbAsset />,
    },
    {
      title: 'Trade',
      icon: <GiTrade />,
    },
    {
      title: 'Pay',
      icon: <MdPayment />,
    },
    {
      title: 'For You',
      icon: <BiUser />,
    },
    {
      title: 'Learn and earn',
      icon: <BiUser />,
    },
    {
      title: 'Notifications',
      icon: <BiUser />,
    },
    {
      title: 'Invite a friend',
      icon: <BiUser />,
    },
    {
      title: 'Send a gift',
      icon: <BiUser />,
    },
  ]
  const [activeItem, setActiveItem] = useState(menuItems[0].title)
  return (
    <div className="w-[250px] flex flex-col gap-6 text-gray-200">
      <div>
        <h1 className="w-full text-center mt-6 text-xl font-extrabold text-violet-700">
          WR Exchange
        </h1>
      </div>
      <div className="flex flex-col gap-2 px-2">
        {menuItems.map((item) => {
          return (
            <div
              key={item.title}
              className="flex gap-3 p-3 items-center hover:bg-slate-800 rounded-2xl w-full cursor-pointer"
              onClick={() => setActiveItem(item.title)}
            >
              <div
                className={`bg-gray-800 rounded-full p-2 ${item.title === activeItem && 'text-violet-700'}`}
              >
                {item.icon}
              </div>
              <h3 className="">{item.title}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SideBar
