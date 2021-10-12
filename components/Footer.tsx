import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className="text-xs mt-8 ml-24 text-gray-300">
      <div className="flex gap-1">
        <button>About</button>
        <p>·</p>
        <button>Help</button>
        <p>·</p>
        <button>Press</button>
        <p>·</p>
        <button>API</button>
        <p>·</p>
        <button>Jobs</button>
        <p>·</p>
        <button>Privacy</button>
        <p>·</p>
        <button>Terms</button>
        <p>·</p>
      </div>
      <div className="flex gap-1">
        <button>Locations</button>
        <p>·</p>
        <button>Top Accounts</button>
        <p>·</p>
        <button>Hashtags</button>
        <p>·</p>
        <button>Language</button>
      </div>
      <p className="mt-5">© 2021 JURREGRAM FROM JURRE</p>
    </div>
  )
}

export default Footer
