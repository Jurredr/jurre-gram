import faker from 'faker'
import React, { useEffect, useState } from 'react'
import Profile from '../interfaces/Profile'

const Suggestions: React.FC = () => {
  const [suggestions, setSuggestions]: any = useState([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-8 ml-24">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions For You</h3>
        <button className="text-sm font-medium text-gray-700">See All</button>
      </div>

      {suggestions.map((profile: Profile) => {
        return (
          <div
            key={profile.id}
            className="flex items-center justify-between mt-3"
          >
            <img
              className="w-10 h-10 rounded-full"
              src={profile.avatar}
              alt="Avatar"
              draggable="false"
            />

            <div className="flex-1 ml-4">
              <h2 className="font-semibold text-sm">{profile.username}</h2>
              <h3 className="w-44 text-xs text-gray-400 truncate">
                Followed by {profile.username}
              </h3>
            </div>

            <button className="text-blue-400 text-xs font-semibold">
              Follow
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Suggestions
