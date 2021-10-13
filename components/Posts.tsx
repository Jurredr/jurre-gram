import {
  collection,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot
} from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import Post from './Post'

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<QueryDocumentSnapshot[]>([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timeStamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      ),
    [db]
  )

  return (
    <div>
      {posts.map((post: QueryDocumentSnapshot) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}
          />
        )
      })}
    </div>
  )
}

export default Posts
