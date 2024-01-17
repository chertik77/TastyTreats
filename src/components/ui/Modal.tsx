import { Dialog, type DialogProps } from 'primereact/dialog'

export const Modal = ({ children, ...options }: DialogProps) => (
  <Dialog blockScroll dismissableMask focusOnShow={false} draggable={false} resizable={false} {...options}>
    {children}
  </Dialog>
)
