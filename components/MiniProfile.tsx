import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const MiniProfile: React.FC = () => {
  const { data: session } = useSession()

  return (
    <div className="flex items-center justify-between mt-8 ml-24">
      <img
        className="rounded-full w-16 h-16"
        src={
          session?.user?.image ||
          'https://randomuser.me/api/portraits/men/43.jpg'
        }
        alt="Avatar"
        draggable="false"
      />

      <div className="flex-1 ml-5 mr-8">
        <h2 className="font-medium">jurre.053</h2>
        <h3 className="text-sm text-gray-400">
          {session?.user?.name || 'Unknown name'}
        </h3>
      </div>

      <button
        className="text-blue-400 text-sm font-semibold"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  )
}

export default MiniProfile
