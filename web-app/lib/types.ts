import React, { Dispatch, SetStateAction } from 'react'

export interface IModalProps {
  setModal: Dispatch<SetStateAction<boolean>>
}

export interface ISidebarButtonProps {
  text:string,
  icon: string,
  path:string
}

export interface IHomeActionButtonProps {
  hideArrow?:boolean
}

export interface INavBarProps {
  isLandingPage?: boolean
}

export interface InameData {
  name:string,
  owner:string,
  secondController:string,
  ttl:string | Object
}

export interface INameInfoBoxProps {
  data: InameData
}