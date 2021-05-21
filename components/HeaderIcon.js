const HeaderIcon = ({ Icon, active }) => {
  return (
    <div className='flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-purple-200 rounded-xl active:border-b-2 active:border-purple-900 group'>
      <Icon className={`text-purple-400 h-5 text-center sm:h-7 mx-auto group-hover:text-purple-600 ${active && 'text-purple-900'}`} />
    </div>
  )
}
export default HeaderIcon
