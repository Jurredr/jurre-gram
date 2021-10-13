import { GetServerSidePropsContext } from 'next'
import {
  ClientSafeProvider,
  getProviders,
  getSession,
  signIn
} from 'next-auth/react'
import React from 'react'
import SignInBox from '../components/signin/SignInBox'
import SignInFooter from '../components/signin/SignInFooter'
import SignInPhones from '../components/signin/SignInPhones'
import SignUpBox from '../components/signin/SignUpBox'

interface Props {
  providers: ClientSafeProvider
}

const SignIn: React.FC<Props> = (props) => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide flex flex-col items-center justify-center gap-12">
      {/* Top */}
      <div className="flex items-center justify-center">
        {/* Left (Phones) */}
        <SignInPhones />

        {/* Right (Auth) */}
        <div className="flex flex-col items-center">
          <SignInBox>
            {Object.values(props.providers).map((provider) => (
              <div
                className="bg-blue-500 rounded-lg text-white font-bold w-52 text-center p-1"
                key={provider.name}
              >
                <button
                  onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
          </SignInBox>
          <SignUpBox />
          <p className="text-sm my-5 text-gray-800">Get the app.</p>
          <div className="flex justify-center items-center gap-2">
            <img
              className="h-10 cursor-pointer"
              src="/app-store.png"
              alt="Appstore"
              draggable="false"
            />
            <img
              className="h-10 cursor-pointer"
              src="/play-store.png"
              alt="Playstore"
              draggable="false"
            />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <SignInFooter />
    </div>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const session = await getSession({ req })
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const providers = await getProviders()
  return {
    props: { providers }
  }
}

export default SignIn
