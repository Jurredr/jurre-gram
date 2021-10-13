import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        {/* Head */}
        <Head>
          <title>Jurregram</title>
          <meta
            name="description"
            content="Jurregram is Instagram, but way cooler."
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Main Component */}
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  )
}
export default MyApp
