import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal */}
    </div>
  )
}

export default Home
