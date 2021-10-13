import React from 'react'

const SignUpBox: React.FC = () => {
  return (
    <div
      className="border border-gray-200 bg-white h-14 w-full
      flex justify-center items-center text-sm gap-1"
    >
      <p>Don't have an account?</p>
      <a
        className="text-blue-500 font-semibold"
        href="https://accounts.google.com/SignUp"
      >
        Sign up
      </a>
    </div>
  )
}

export default SignUpBox
