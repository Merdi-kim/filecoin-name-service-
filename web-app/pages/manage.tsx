import React from 'react'
import Footer from '@/components/footer'
import SidebarButton from '@/components/SidebarButton';
import NameDisplayer from '@/components/NameDisplayer';
import MessageBox from '@/components/MessageBox';
import NavBar from '@/components/NavBar';
import { getAccount } from '@wagmi/core'
import ResultPlaceholder from '@/components/ResultPlaceholder';

function Manage() {

  const account = getAccount()

  return (
    <div>
        <div className='h-[88vh] text-white'>
          <NavBar/>
          <div className='h-[75vh] flex'>
            <div className='hidden md:flex w-1/6 h-full flex-col justify-center'>
                <SidebarButton icon={'home'} text='Home' path='/home'/>
                <SidebarButton icon={'settings'} text='Manage' path='/manage'/>
            </div>
            <div className='w-full md:w-5/6 h-full flex flex-col items-center bg-slate-100'>
              <div className="h-2/6 flex items-center" >
                {!account?.address && <MessageBox message={'Connect your wallet in order to register a name'}/>}
              </div>
              <div className='h-4/6 flex justify-center items-center w-full'>
                <div className='min-w-[350px] w-1/2 h-12 px-2 rounded-2xl flex items-center justify-center bg-slate-200'>
                 <ResultPlaceholder/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Manage