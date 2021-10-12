import React, { useEffect, useState } from 'react'
import faker from 'faker'
import Story from './Story'
import Profile from '../interfaces/Profile'

const Stories: React.FC = () => {
  const [suggestions, setSuggestions]: any = useState([])

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div
      className="flex gap-4 p-5 bg-white mt-8
    border-gray-200 border rounded-sm overflow-x-scroll
    scrollbar-thin scrollbar-thumb-gray-200"
    >
      {suggestions.map((profile: Profile) => {
        return (
          <Story
            key={profile.id}
            img={profile.avatar}
            username={profile.username}
          />
        )
      })}
    </div>
  )
}

export default Stories
