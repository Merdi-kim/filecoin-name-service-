import Footer from '@/components/footer';
import SidebarButton from '@/components/SidebarButton';
import NameDisplayer from '@/components/NameDisplayer';
import MessageBox from '@/components/MessageBox';
import NavBar from '@/components/NavBar';
import { useContract, useProvider } from 'wagmi';
import { getAccount } from '@wagmi/core';
import Modal from '@/components/Modal';
import { useState } from 'react';
import { contractAddress } from '@/utils';
import abi from '@/artifacts/contracts/fns.sol/FNS.json';
import { ethers } from 'ethers';
import { useRecoilState } from 'recoil';
import { nameInfo } from '@/lib/recoil';
import ResultPlaceholder from '@/components/ResultPlaceholder';

const { hash } = require('eth-ens-namehash');

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [displayName, setDisplayName] = useState(false);
  const [hideNameDisplayBox, setHideNameDisplayBox] = useState(true);
  const [name, setName] = useState('');
  const [, setNameInfo] = useRecoilState(nameInfo);
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
    setLoading(true)
    const nameHash = hash(name);
    const { owner } = await contract?.checkName(nameHash);
    const price = Number(ethers.utils.formatEther(await contract?.getPriceTag()));
    setHideNameDisplayBox(false);
    owner == ethers.constants.AddressZero ? setDisplayName(true) : setDisplayName(false);
    setNameInfo({ name, nameHash, price });
    setLoading(false)
    setName('');
  };

  return (
    <div>
      <div className="h-[100vh] bg-fadedColor text-white">
        <NavBar />
        <div className="h-[75vh] flex">
          <div className="hidden md:flex w-1/6 h-full flex-col justify-center">
            <SidebarButton icon={'home'} text="Home" path="/home" />
            <SidebarButton icon={'settings'} text="Manage" path="/manage" />
          </div>
          <div className="w-full md:w-5/6 h-full flex flex-col items-center bg-mainColor rounded-l-xl">
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
                  { !loading ? <img src="/icons/search.svg" alt="search icon" onClick={searchForName} className="h-4/6 cursor-pointer" />:
                  <img src="/icons/spinner.svg" alt="spinner icon" className="h-4/6 cursor-pointer animate-spin" />}
                </div>
              </div>
            </div>
            <div className="h-3/6 w-full flex justify-center items-center">
              <>
                {hideNameDisplayBox ? (
                  <ResultPlaceholder />
                ) : (
                  <>
                    {displayName ? (
                      <NameDisplayer setModal={setShowModal} />
                    ) : (
                      <MessageBox message="Name already taken" />
                    )}
                  </>
                )}
              </>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {showModal && <Modal setModal={setShowModal} />}
    </div>
  );
}

export default Home;
