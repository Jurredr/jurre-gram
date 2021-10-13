import React from 'react'

const SignInBox: React.FC = (props) => {
  return (
    <div
      className="border border-gray-200 bg-white w-full flex
      justify-center items-center flex-col pb-8 mb-2"
    >
      <img
        className="w-48 cursor-pointer my-8"
        src="/logo.svg"
        alt="Logo"
        draggable="false"
      />
      {props.children}
    </div>
  )
}

export default SignInBox
