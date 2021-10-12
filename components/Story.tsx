import React from 'react'

interface Props {
  key: number
  img: string
  username: string
}

const Story: React.FC<Props> = (props) => {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer object-contain"
        src={props.img}
        alt="Avatar"
      />
      <p className="text-xs w-14 pt-1 truncate text-center">{props.username}</p>
    </div>
  )
}

export default Story
