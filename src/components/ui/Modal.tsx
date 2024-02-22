import type { DialogProps } from 'primereact/dialog'

import { Dialog } from 'primereact/dialog'

export const Modal = ({ children, ...options }: DialogProps) => (
  <Dialog
    blockScroll
    dismissableMask
    draggable={false}
    focusOnShow={false}
    resizable={false}
    {...options}>
    {children}
  </Dialog>
)
