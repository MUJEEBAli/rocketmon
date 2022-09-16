import Image from 'next/image'
import React from 'react'

export default function  footer
() {
  return (
    <footer className=' items-center'>
        <h1> Rocket Monsters</h1>
        <p className='justify-between item-center mt-4 mb-4 text-black text-lg '>Rocket Monsters NFTs are all playable characters in our Unreal Engine 5 game.</p>
        <div className='flex  items-center justify-center gap-2'> 
                 <div>   
                 <a href='https://twitter.com/MonstersRocket'><Image
      alt="Rock Monsitor"
      src="/twitter.png"
      
      width={30}
      height={30}
    />
    </a></div>
         
         <div>
         <a href='https://discord.gg/xpzHexbhyU'><Image
      alt="Rock Monsitor"
      src="/discord.png"
      width={30}
      height={30}
    />
    </a>
         </div>
  <div> 
     <a href='https://www.youtube.com/c/RocketMonsters/videos'><Image
      alt="Rock Monsitor"
      src="/youtube.png"
      width={30}
      height={30}
      
    />
    </a>
    </div>
    </div>
    
    </footer>
    
  )
}
