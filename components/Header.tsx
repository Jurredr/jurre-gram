import React from 'react'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* Left */}
        <div className="relative h-24 w-24">
          <Image src="/logo.svg" layout="fill" objectFit="contain" />
        </div>

        {/* Middle */}

        {/* Right */}
      </div>
    </div>
  )
}

export default Header
