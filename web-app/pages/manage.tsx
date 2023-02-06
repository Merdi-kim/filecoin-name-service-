import React, { useState } from 'react';
import Footer from '@/components/footer';
import SidebarButton from '@/components/SidebarButton';
import NameInfoBox from '@/components/NameInfoBox';
import MessageBox from '@/components/MessageBox';
import NavBar from '@/components/NavBar';
import { getAccount } from '@wagmi/core';
import ResultPlaceholder from '@/components/ResultPlaceholder';
import { useContract, useProvider } from 'wagmi';
import { contractAddress } from '@/utils';
import abi from '@/artifacts/contracts/fns.sol/FNS.json';
import { InameData } from '@/lib/types';
import Image from 'next/image';

const { hash } = require('eth-ens-namehash');

function Manage() {
  const [nameData, setNameData] = useState<InameData>({
    name: '',
    owner: '',
    secondController: '',
    ttl: '',
  });
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState(false);
  const [hideNameDisplayBox, setHideNameDisplayBox] = useState(true);
  const [loading, setLoading] = useState(false)
  const account = getAccount();
  const provider = useProvider();
  const contract = useContract({
    address: contractAddress,
    abi: abi.abi,
    signerOrProvider: provider,
  });

  const searchForName = async () => {
    if(!name) return window.alert('No name provided')
    setLoading(true);
    const nameHash = hash(name);
    const { owner, secondController, ttl } = await contract?.checkName(nameHash);
    setHideNameDisplayBox(false);
    owner == account.address ? setDisplayName(true) : setDisplayName(false);
    setNameData({ name, owner, secondController, ttl });
    setLoading(false)
    setName('');
  };

  return (
    <div>
      <div className="h-[100vh] bg-fadedColor text-white">
        <NavBar />
        <div className="">
          <div className="flex h-[75vh]">
            <div className="hidden md:flex w-1/6 h-full flex-col justify-center">
              <SidebarButton icon={'home'}  text="Home" path="/home" />
              <SidebarButton icon={'settings'} text="Manage" path="/manage" />
            </div>
            <div className="w-full md:w-5/6 h-full flex flex-col items-center rounded-lg bg-mainColor">
              <div className="h-2/6 flex items-center">
                {!account?.address && <MessageBox message={'Connect your wallet in order to register a name'} />}
              </div>
              <div className="h-1/6 flex justify-center items-center w-full">
                <div className="min-w-[350px] w-1/2 h-12 px-2 rounded-2xl flex items-center justify-center bg-fadedColor">
                  <input
                    type="text"
                    placeholder='Eg: "name" ... not "name.fil" '
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    onFocus={(e) => {
                      setHideNameDisplayBox(true);
                    }}
                    className="w-full h-5/6 pl-2 mr-1 border-none outline-none bg-slate-200 text-mainColor rounded-xl"
                  />
                  <div className="h-[2.5rem] w-[2.7rem] flex items-center justify-center bg-slate-200 border-2 border-mainColor hover:transition-all rounded-full hover:scale-105">
                    { !loading ? <Image src="/icons/search.svg" onClick={searchForName} height={400} width={400} alt="" className="h-4/6 cursor-pointer" /> :
                    <Image src="/icons/spinner.svg" onClick={searchForName} height={400} width={400} alt="" className="h-4/6 cursor-pointer animate-spin" />}
                  </div>
                </div>
              </div>
              <div className="h-3/6 w-full flex justify-center items-center">
                <>
                  {hideNameDisplayBox ? (
                    <ResultPlaceholder />
                  ) : (
                    <>
                      {displayName ? <NameInfoBox data={nameData} /> : <MessageBox message="You don't own this name" />}
                    </>
                  )}
                </>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Manage;
