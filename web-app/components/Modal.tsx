import React, { ChangeEvent, useState } from 'react'
import { IModalProps } from '@/lib/types'
import { useRecoilState } from 'recoil'
import { nameInfo } from '@/lib/recoil'
import { contractAddress } from '@/utils';
import abi from '@/artifacts/FNS.json'
import { useContract, useSigner } from 'wagmi';

function Modal({setModal}:IModalProps) {

  const [selectedFile, setSelectedFile] = useState<FileList>()
  const [previewFileUrl, setPreviewFileUrl] = useState<string>()
  const [nameData, _] = useRecoilState(nameInfo)
  const { data: signer, isError, isLoading } = useSigner()

  const contract = useContract({
    address: contractAddress,
    abi: abi.abi,
    signerOrProvider: signer
  })

  const hideModal = () => {
    setModal(false)
  }

  const previewPicture = (e:ChangeEvent) => {
    const{files} = e.target as HTMLInputElement
    if(!files) return 
    setSelectedFile(files)
    const fileUrl = URL.createObjectURL(files[0])
    setPreviewFileUrl(fileUrl)
  } 

  const purchaseName = async() => {
    if(!nameData.nameHash || nameData.price < 0.005) return 
    await contract?.registerName(nameData.nameHash, false, 366)
    hideModal()
  }
  return (
    <div className='h-[100vh] flex items-center justify-center w-full overflow-hidden absolute top-0 bg-slate-200'>
      <img src="/icons/cross.svg" alt="cross" onClick={hideModal} className='absolute top-[22vh] left-[87vw] lg:left-[74vw] h-4' />
      <div className='h-[50vh] w-[80vw] lg:w-[50vw] flex bg-slate-300 rounded-lg overflow-hidden'>
        <div className='flex w-[50%] flex-col justify-center p-4 items-center'>
          <div className='w-full flex justify-between'>
            <h3>{nameData.name}.fil</h3>
            <p>{nameData.price} FIL</p>
          </div>
          <div className= 'w-full h-8 mt-[5rem] text-center'>
           <button className='h-full w-[8rem] bg-slate-400 rounded-lg cursor-pointer' onClick={() => purchaseName()}>Purchase</button>
        </div>
        </div>
        <div className='w-[50%] flex flex-col items-center justify-center'>
          <img src={previewFileUrl} alt="" className='h-[16rem] w-[16rem] object-contain rounded-lg bg-slate-100'/>
          <input type="file" accept='image/*' onChange={previewPicture} id='profile' className='w-full hidden'/>
          <label htmlFor="profile" className='mt-4 bg-gray-100 p-2 cursor-pointer rounded-full'><img src="/icons/addImage.svg" alt="add image" className='h-6' /></label>
        </div>
      </div>
    </div>
  )
}

export default Modal