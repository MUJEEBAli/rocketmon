import React from 'react'

function TopBar() {
  return (
    <header className='bg-black text-white w-full'>
        <div className='flex justify-between   items-center ml-3 mr-3 md:ml-24 md:mr-24 pt-3'>

            <div className='ml-1 pt-4'>
            <img
      alt="Rock Monsitor"
      src="/ico.webp"
      className=' w-52'
    />
            </div>
            
            <div className=''>
               <button className='  bg-blue-500 hover:bg-blue-700 text-white md:font-bold  py-1  px-3 md:py-2 md:px-4  rounded-full'> Connect Wallet</button>
            </div>
        </div>
  
    </header>
  )
}

export default TopBar