import Image from 'next/image'
import React from 'react'

function TopBar() {
  return (
    <header className=' text-white w-full'>
      <div className='flex flex-col tablet:flex-row justify-between   items-center ml-0 mr-0 md:ml-1 md:mr-1 lg:ml-24 lg:mr-24 pt-3 '>

        <div className='pt-4 sm:image-logo'>
          <Image
            alt="Rock Monsitor" 
            src="/logo.png"
            width={350}
            height={90}
          />
        </div>

        <div className=''>
          <button className='  bg-blue-500 hover:bg-blue-700 text-white md:font-bold md:py-2 md:px-4  rounded-full sm:align-bottom'>Connect wallet</button>
        </div>
      </div>

    </header>
  )
}

export default TopBar