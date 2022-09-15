import Image from 'next/image'
import React from 'react'

export default function  footer
() {
  return (
    <footer className=' items-center'>
        <h1> Rocket Monsters</h1>
        <p className='justify-between item-center mt-4 mb-4 text-gray-600 '>is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry&`&apos;`s standard dummy text ever since the 1500s.</p>
        <div className='flex  items-center justify-center gap-2'> 
                 <div>   
                 <a href='https://twitter.com/MonstersRocket'><Image
      alt="Rock Monsitor"
      src="/twitter.svg"
      
      width={30}
      height={30}
    />
    </a></div>
         
         <div>
         <a href='https://discord.gg/xpzHexbhyU'><Image
      alt="Rock Monsitor"
      src="/discord.svg"
      width={30}
      height={30}
    />
    </a>
         </div>
  <div> 
     <a href='https://www.youtube.com/c/RocketMonsters/videos'><Image
      alt="Rock Monsitor"
      src="/youtube.svg"
      width={30}
      height={30}
      
    />
    </a>
    </div>
    </div>
    
    </footer>
    
  )
}
