import React from 'react'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* Left */}
        <div className="relative hidden h-24 w-24 lg:inline-grid">
          <Image src="/logo.svg" layout="fill" objectFit="contain" />
        </div>

        <div className="relative w-10 h-10 lg:hidden flex-shrink-0">
          <Image src="/icon.svg" layout="fill" objectFit="contain" />
        </div>

        {/* Middle */}

        {/* Right */}
      </div>
    </div>
  )
}

export default Header
