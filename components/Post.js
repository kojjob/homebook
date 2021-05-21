import Image from "next/image"
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
            <p className='font-medium'>{name}</p>
            <p className='text-xs text-purple-400'>
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className='pt-4'>{message}</p>
      </div>
      {postImage && (
        <div className='relative h-56 md:h-96 bg-purple-50'>
          <Image src={postImage} objectFit='cover' layout='fill' />
        </div>
      )}
    </div>
  )
}

export default Post
