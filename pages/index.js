import Head from 'next/head'

import TopBar from '../components/header'
import ComingSoon from '../components/comingsoon'
import Main from '../components/Main'
import Footer from '../components/footer'
import bd from '../public/center.png'

export default function Home() {
  return (
    <div  className=' bg-bgm bg-blur-sm  text-white w-full'>
      <Head>
        <title>Rocktet Monsiter </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className=''><TopBar/>
      </div>
      <div className='flex  justify-center items-center drop-shadow-md hover:drop-shadow-xl'> <ComingSoon/></div>
      <div className='flex justify-center items-baseline  pt-2  pl-1'> <Main/></div>
      <div className='flex justify-center items-center '> <button className='mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'> Connect Wallet</button></div>
      
      <div className='flex justify-center items-center '> <button className='mb-2 py-2 px-4 rounded-full'><Footer/></button></div>

      <div className=' mt-10 bg-[#111111] text-center'> <span class="text-smn w-[100%]  text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://rocket-monsters.netlify.app/" class="hover:underline">Rocket Monsters™</a>. All Rights Reserved.
    </span></div>
    </div>
  )
}
