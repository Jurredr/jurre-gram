import { ClientSafeProvider, getProviders, signIn } from 'next-auth/react'

interface Props {
  providers: ClientSafeProvider
}

const SignIn: React.FC<Props> = (props) => {
  return (
    <>
      {Object.values(props.providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers }
  }
}

export default SignIn
