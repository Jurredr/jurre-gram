import React from 'react'

const SignInFooter: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center text-xs text-gray-500">
      <div className="flex gap-2 flex-wrap items-center justify-center sm:gap-4">
        <button>About</button>
        <button>Blog</button>
        <button>Jobs</button>
        <button>Help</button>
        <button>API</button>
        <button>Privacy</button>
        <button>Terms</button>
        <button>Top Accounts</button>
        <button>Hashtags</button>
        <button>Locations</button>
        <button>Instagram Lite</button>
      </div>
      <div className="flex gap-4 mt-2">
        <button>Beauty</button>
        <button>Dance</button>
        <button>Fitness</button>
        <button>Food & Drink</button>
        <button>Home & Garden</button>
        <button>Music</button>
        <button>Visual Arts</button>
      </div>
      <div className="flex mt-5 justify-center items-center gap-4">
        <p className="cursor-pointer">English</p>
        <p>© 2021 Jurregram from Jurre</p>
      </div>
    </div>
  )
}

export default SignInFooter
