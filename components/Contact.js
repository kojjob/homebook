import Image from "next/image"
function Contact({src, name}) {
  return (
    <div className='flex items-center space-x-3 mb-2 p-2 relative hover:bg-purple-200 rounded-xl cursor-pointer'>
      <Image
        className='rounded-full'
        objectFit='cover'
        src={src}
        width={50}
        height={50}
        layout='fixed'
      />
      <p className='text-purple-600'>{name}</p>
      <div className='absolute bottom-2 left-7 bg-green-500 h-3 w-3 rounded-full animate-pulse'></div>
    </div>
  )
}  

export default Contact;