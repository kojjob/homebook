import Image from "next/image" 

function SidebarRow({src, title, Icon}) {

  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-purple-200 rounded-xl cursor-pointer">
      {src && (
        <Image
          className='rounded-full'
          src={src}
          width={30}
          height={30}
          layout='fixed'
        />
      )}
      {Icon && <Icon className='h-8 w-8 text-purple-400' />}
      <p className='hidden sm:inline-flex font-medium text-purple-600'>{title}</p>
    </div>
  )
}

export default SidebarRow;