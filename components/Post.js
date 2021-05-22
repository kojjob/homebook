import Image from "next/image"
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline"

function Post({ name, message, email, postImage, image, timestamp }) {
  return (
    <div className='flex flex-col'>
      <div className='p-5 bg-purple-50 mt-5 rounded-t-2xl shadow-sm'>
        <div className='flex item-center space-x-2'>
          <img
            className='rounded-full'
            src={image}
            alt={image}
            width={40}
            height={40}
          />
          <div>
            <p className='font-bold text-purple-600'>{name}</p>
            {timestamp ? (
              <p className='text-xs text-purple-600'>
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className='text-xm animate-bounce'>loading</p>
            )}
          </div>
        </div>
        <p className='pt-4'>{message}</p>
      </div>
      {postImage && (
        <div className='relative h-56 md:h-96 bg-purple-50'>
          <Image src={postImage} objectFit='cover' layout='fill' />
        </div>
      )}
      {/*   Footer of post */}
      <div className='flex justify-between items-center bg-purple-50 shadow-md text-purple-600 border-t  rounded-b-2xl'>
        <div className='inputIcon rounded-none rounded-bl-2xl'>
          <ThumbUpIcon className='h-4' />
          <p className='text-xs sm:text-base'>Like</p>
        </div>
        <div className='inputIcon rounded-none rounded-t-4xl'>
          <ChatAltIcon className='h-4 text-sm' />
          <p className='text-xs sm:text-base '>Comment</p>
        </div>
        <div className='inputIcon rounded-none rounded-br-2xl'>
          <ShareIcon className='h-4' />
          <p className='text-xs sm:text-base'>Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post
