import React, { Dispatch, SetStateAction } from 'react'

export interface IModalProps {
  setModal: Dispatch<SetStateAction<boolean>>
}

export interface ISidebarButtonProps {
  text:string,
  icon: string,
  path:string
}