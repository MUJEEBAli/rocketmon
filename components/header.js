import React from 'react'

function TopBar() {
  return (
    <header className='bg-black text-white w-full'>
        <div className='flex justify-between items-center ml-3 mr-3 pt-3'>

            <div className='ml-1'>
            <img
      alt="Rock Monsitor"
      src="/logo2.png"
      width={50}
      height={50}
    />
            </div>
            <div className='flex  items-center justify-around gap-3'> 
                 <div>   <img
      alt="Rock Monsitor"
      src="/twitter.png"
      width={40}
      height={40}
    /></div>
         
         <div>
         <img
      alt="Rock Monsitor"
      src="/github.png"
      width={40}
      height={40}
    />
         </div>
  <div> 
    <img
      alt="Rock Monsitor"
      src="/youtube.png"
      width={40}
      height={40}
    /></div>
            </div>
            <div>
              <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'> Connect Wallet</button>
            </div>
        </div>
  
    </header>
  )
}

export default TopBar