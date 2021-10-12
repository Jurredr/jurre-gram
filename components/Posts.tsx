import React from 'react'
import PostData from '../interfaces/PostData'
import Post from './Post'

const posts: PostData[] = [
  {
    id: 1,
    username: 'jurre.053',
    userImg: 'https://randomuser.me/api/portraits/men/43.jpg',
    img: 'https://randomuser.me/api/portraits/men/43.jpg',
    caption: 'This is so cool!'
  },
  {
    id: 2,
    username: 'asdasdasd',
    userImg: 'https://randomuser.me/api/portraits/men/43.jpg',
    img: 'https://randomuser.me/api/portraits/men/43.jpg',
    caption: 'This is very epic!'
  }
]

const Posts: React.FC = () => {
  return (
    <div>
      {posts.map((post: PostData) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
          />
        )
      })}
    </div>
  )
}

export default Posts
