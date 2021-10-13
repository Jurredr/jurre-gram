import React, { useState } from 'react'
import { DotsHorizontalIcon } from '@heroicons/react/outline'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore'
import { db } from '../firebase'
import { useSession } from 'next-auth/react'

interface Props {
  key: string
  id: string
  username: string
  userImg: string
  img: string
  caption: string
}

const Post: React.FC<Props> = (props) => {
  const { data: session } = useSession()
  const [commentInput, setCommentInput] = useState('')
  const [comments, setComments] = useState([])

  const sendComment = async (e: any) => {
    e.preventDefault()

    // Get comment, reset current
    const commentToSend = commentInput
    setCommentInput('')

    await addDoc(collection(db, 'posts', props.id, 'comments'), {
      comment: commentToSend,
      // @ts-ignore
      username: session.user.username,
      // @ts-ignore
      userImage: session.user.image,
      timeStamp: serverTimestamp()
    })
  }

  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-4">
        <img
          className="rounded-full h-11 w-11 object-contain p-1 mr-3 cursor-pointer"
          src={props.userImg}
          alt="Avatar"
          draggable="false"
        />
        <div className="flex flex-1">
          <p className="align-start font-semibold text-sm hover:underline cursor-pointer w-max-12">
            {props.username}
          </p>
        </div>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>

      {/* Image */}
      <img
        className="object-cover w-full"
        src={props.img}
        alt="Post Image"
        draggable="false"
      />

      {/* Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex gap-4">
          <img
            className="btn"
            src="/heart-icon.svg"
            alt="Like"
            draggable="false"
          />
          <img
            className="btn"
            src="/comment-icon.svg"
            alt="Comment"
            draggable="false"
          />
          <img
            className="btn"
            src="/direct-icon.svg"
            alt="Send"
            draggable="false"
          />
        </div>
        <img
          className="btn"
          src="/bookmark-icon.svg"
          alt="Save"
          draggable="false"
        />
      </div>

      {/* Caption */}
      <p className="p-5 truncate">
        <span className="font-semibold mr-1">{props.username}</span>
        {props.caption}
      </p>

      {/* Comments */}

      {/* Comment Input */}
      <form className="flex items-center px-4 py-2 border-0 border-t-[1px] border-t-gray-100">
        <img
          className="btn"
          src="/emoji-icon.svg"
          alt="Emoji"
          draggable="false"
        />
        <input
          type="text"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button
          type="submit"
          disabled={!commentInput.trim()}
          onClick={sendComment}
          className="font-semibold text-blue-400"
        >
          Post
        </button>
      </form>
    </div>
  )
}

export default Post
