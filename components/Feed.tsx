import React from 'react'
import Posts from './Posts'
import Stories from './Stories'

const Feed: React.FC = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* Left */}
      <section className="col-span-2">
        {/* Stories */}
        <Stories />

        {/* Posts */}
        <Posts />
      </section>

      {/* Right */}
      <section className="col-span-1">
        {/* Mini Profile */}
        {/* Suggestions */}
        {/* Footer */}
      </section>
    </main>
  )
}

export default Feed
