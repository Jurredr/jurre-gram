import React from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon
} from '@heroicons/react/outline'

const Header: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* Left */}
        <div className="relative hidden w-24 lg:inline-grid cursor-pointer">
          <Image
            src="/logo.svg"
            layout="fill"
            objectFit="contain"
            draggable="false"
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="/icon.svg"
            layout="fill"
            objectFit="contain"
            draggable="false"
          />
        </div>

        {/* Middle */}
        <div className="relative mt-1 p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="bg-gray-50 block w-full
            pl-10 sm:text-sm border-gray-300
            rounded-md focus:ring-black focus:border-black"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* Right */}
      </div>
    </div>
  )
}

export default Header
