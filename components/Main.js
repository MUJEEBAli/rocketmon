import Image from 'next/image'
import React from 'react'

export default function Main
() {
  return (
    <div  className='justify-between items-center mt-6 mb-6'>
        
        <div> <button className=' text-lg bg-[#616161] text-white font-bold rounded-full mb-4 pr-4 pl-4'>0 SOL</button></div>
        <div>
            <Image
       src="/center.png"
       alt=""
       width={500}
       Height={500}
       />
        </div>
       
    </div>
  )
}
