import React, { ReactNode } from 'react'

export interface ModalProps {
  title?: string
  titleClass?: ReactNode | undefined
  isOpen: boolean
  onClose: () => void
  children?: ReactNode
  className?: string
  icon?: React.ReactNode
  xClose?: boolean
}

export interface ModalBreaksProps {
  title?: string
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  children?: ReactNode
  className?: string
  breakInfo?: MasterBreaksProps | null
  paragraph1?: string
  textButton1?: string
  textButton2?: string
  icon?: React.ReactNode
}

export interface ModalStatusProps {
  title?: string
  titleClass?: string
  isOpen: boolean
  onClose: () => void
  icon?: React.ReactNode
  paragraph1?: string
  textButton1?: string
  textButton2?: string
  agentId?: string
  statusLogginId?: number
  refetch?: () => void
}

export interface MasterBreaksProps {
  id: number
  name: string
  time: number
  isActive: boolean
}

export interface BreakCardProps {
  title: string
  content: string
  icon: React.ReactNode
  isBlock?: boolean
}

export interface PopupsCalls {}
