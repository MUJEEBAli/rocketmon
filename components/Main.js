import Image from 'next/image'
import React from 'react'

export default function Main
() {
  return (
    <div  className='justify-between items-center mt-6 mb-6'>
        
        <div> <button className='  text-lg bg-[#616161] text-white font-bold rounded-full mb-4 pr-4 pl-4'>0 SOL</button></div>
         <div className=' flex  '>
          <div className='mr-2'> <Image
       src="/elephent.webp"
       alt=""
       width={150}
       height={200}
       /></div>
          <div><Image
       src="/monster.webp "
       alt=""
       width={150}
       height={200}
       /></div>
           
       
        </div>
       
    </div>
  )
}
