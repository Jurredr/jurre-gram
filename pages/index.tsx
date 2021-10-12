import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen">
      {/* Head */}
      <Head>
        <title>Jurregram</title>
        <meta
          name="description"
          content="Jurregram is Instagram, but way cooler."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal */}
    </div>
  )
}

export default Home
