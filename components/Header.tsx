import React from 'react'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'

const Header: React.FC = () => {
  const { data: session } = useSession()

  return (
    <div className="border-b border-gray-200 bg-white sticky top-0 z-50 min-h-14 h-14">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto py-3 px-5">
        {/* Left */}
        <div className="relative hidden w-24 lg:inline-grid cursor-pointer">
          <Image
            src="/logo.svg"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            draggable="false"
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="/icon.svg"
            alt="Icon"
            layout="fill"
            objectFit="contain"
            draggable="false"
          />
        </div>

        {/* Middle */}
        <div className="max-w-xs hidden md:block">
          <div className="relative rounded-md">
            <div className="absolute inset-y-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon className="h-4 w-4 text-gray-400" />
            </div>
            <input
              className="bg-gray-50 block w-full h-8
              pl-10 sm:text-sm border-gray-200 rounded-md
              focus:ring-gray-300 focus:border-gray-300"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="max-w-xs block md:hidden h-8"></div>

        {/* Right */}
        <div className="flex items-center justify-end gap-6">
          <img
            className="navBtn"
            src="/home-icon.svg"
            alt="Home"
            draggable="false"
          />
          <div className="relative navBtn flex justify-center items-center">
            <img src="/direct-icon.svg" alt="Direct" draggable="false" />
            <div
              className="absolute -top-1 -right-2 text-xs bg-red-500
              rounded-full flex items-center justify-center text-white"
              style={{ width: '1.15rem', height: '1.15rem' }}
            >
              3
            </div>
          </div>
          <img
            className="navBtn"
            src="/explore-icon.svg"
            alt="Direct"
            draggable="false"
          />
          <img
            className="navBtn"
            src="/activity-icon.svg"
            alt="Direct"
            draggable="false"
          />
          <img
            src={
              session?.user?.image ||
              'https://randomuser.me/api/portraits/men/43.jpg'
            }
            alt="Profile"
            draggable="false"
            className="h-6 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
