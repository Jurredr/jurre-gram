import React from 'react'

interface Props {
  key: number
  id: number
  username: string
  userImg: string
  img: string
  caption: string
}

const Post: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>I'm a post</h1>
    </div>
  )
}

export default Post
