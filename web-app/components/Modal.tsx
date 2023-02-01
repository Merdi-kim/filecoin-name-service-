import React, { Dispatch, SetStateAction } from 'react'

interface IModalProps {
    setModal: Dispatch<SetStateAction<boolean>>
}
function Modal({setModal}:IModalProps) {

  const hideModal = () => {
    setModal(false)
  }
  return (
    <div className='h-[100vh] w-full overflow-hidden absolute top-0 bg-slate-200' onClick={hideModal}>

    </div>
  )
}

export default Modal