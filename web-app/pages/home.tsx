import Footer from '@/components/footer'
import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import SidebarButton from '@/components/SidebarButton';

function Home() {
  return (
    <div>
        <div className='h-[88vh]'>
          <div className='h-24 p-4 flex justify-between items-center'>
            <img src="https://user-images.githubusercontent.com/310223/150098621-c5b41b36-ff7d-4a56-86e7-b7f130e845a0.png" alt="" className='h-20' />
            <ConnectButton/>
          </div>
          <div className='h-[75vh] flex'>
            <div className='hidden md:flex w-1/6 h-full flex-col justify-center'>
                <SidebarButton text='Search'/>
                <SidebarButton text='Manage'/>
            </div>
            <div className='w-full md:w-5/6 h-full bg-slate-500'>

            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home