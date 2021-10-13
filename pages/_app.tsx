import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      {/* Head */}
      <Head>
        <title>Jurregram</title>
        <meta
          name="description"
          content="Jurregram is Instagram, but way cooler."
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
export default MyApp
