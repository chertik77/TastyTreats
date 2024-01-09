import { Dialog, DialogPassThroughOptions } from 'primereact/dialog'
import type { PropsWithChildren, ReactNode } from 'react'

type ModalProps = PropsWithChildren & {
  isVisible: boolean
  hide: () => void
  pathTroughOptions: DialogPassThroughOptions
  footer?: ReactNode
}

export const Modal = ({ isVisible, hide, children, pathTroughOptions, ...options }: ModalProps) => (
  <Dialog
    visible={isVisible}
    onHide={hide}
    blockScroll
    dismissableMask
    pt={pathTroughOptions}
    focusOnShow={false}
    draggable={false}
    resizable={false}
    {...options}>
    {children}
  </Dialog>
)
