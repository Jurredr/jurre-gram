import React, { Fragment, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/ModalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { CameraIcon } from '@heroicons/react/outline'
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc
} from '@firebase/firestore'
import { db, storage } from '../firebase'
import { useSession } from 'next-auth/react'
import { ref, getDownloadURL, uploadString } from '@firebase/storage'
import { doc } from 'firebase/firestore'

const Modal: React.FC = () => {
  const { data: session } = useSession()
  const [open, setOpen] = useRecoilState(modalState)
  const filePickerRef = useRef(null)
  const captionRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)

  const uploadPost = async () => {
    if (loading) return

    setLoading(true)

    // 1) Create post and add to Firestore 'posts' collection
    const docRef = await addDoc(collection(db, 'posts'), {
      // @ts-ignore
      username: session?.user.username || 'undefined',
      // @ts-ignore
      caption: captionRef.current.value || '',
      profileImg: session?.user?.image,
      timeStamp: serverTimestamp()
    })

    // 2) Upload the image to Firebase Storage with the post ID
    const imageRef = ref(storage, `posts/${docRef.id}/image`)
    await uploadString(imageRef, selectedFile || '', 'data_url').then(
      async () => {
        // 3) Get a download URL from Firebase Storage and update original post
        const downloadURL = await getDownloadURL(imageRef)
        await updateDoc(doc(db, 'posts', docRef.id), {
          image: downloadURL
        })
      }
    )

    setOpen(false)
    setLoading(false)
    setSelectedFile(null)
    /* @ts-ignore */
    filePickerRef.current.value = ''
  }

  const addImageToPost = (e: any) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
      if (readerEvent.target?.result !== null) {
        // @ts-ignore
        setSelectedFile(readerEvent.target.result)
      }
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => {
          setOpen(false)
          setLoading(false)
          setSelectedFile(null)
          /* @ts-ignore */
          filePickerRef.current.value = ''
        }}
      >
        <div
          className="flex items-end justify-center min-h-[800px]
          sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* Trick the browser into centering modal contents */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden
              shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
            >
              <div>
                {selectedFile ? (
                  <img
                    src={selectedFile}
                    alt="Photo"
                    draggable="false"
                    onClick={() => {
                      setSelectedFile(null)
                      /* @ts-ignore */
                      filePickerRef.current.value = ''
                    }}
                    className="w-full object-contain cursor-pointer"
                  />
                ) : (
                  <div
                    onClick={() => {
                      /* @ts-ignore */
                      filePickerRef.current.click()
                    }}
                    className="mx-auto flex items-center justify-center h-12 w-12 rounded-full
                bg-red-100 cursor-pointer"
                  >
                    <CameraIcon
                      className="h-6 w-6 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                )}
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Upload a photo
                    </Dialog.Title>

                    <div>
                      <input
                        ref={filePickerRef}
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={addImageToPost}
                      />
                    </div>

                    <div className="mt-2">
                      <input
                        ref={captionRef}
                        className="border-none focus:ring-0 w-full text-center"
                        type="text"
                        placeholder="Enter a caption..."
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 sm:mt-6">
                  <button
                    onClick={uploadPost}
                    disabled={!selectedFile}
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent
                    shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 sm:text-sm
                    disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300"
                  >
                    {loading ? 'Uploading...' : 'Upload Post'}
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal
