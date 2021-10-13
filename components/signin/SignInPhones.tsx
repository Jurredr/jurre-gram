import React from 'react'

const SignInPhones: React.FC = () => {
  return (
    <div className="relative hidden md:inline-block">
      <img
        className="h-[37rem] relative"
        src="/phones.png"
        alt="Phones"
        draggable="false"
      />
      <img
        className="h-[69%] absolute top-24 right-[3.75rem]"
        src="/phone-content.jpeg"
        alt="Phone Content"
        draggable="false"
      />
    </div>
  )
}

export default SignInPhones
