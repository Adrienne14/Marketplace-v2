import React from 'react'
import { Modal } from '@mui/material'
import useMarketplaceV2 from 'hooks/useMarketplaceV2'
import { FaWindowClose } from 'react-icons/fa'
import { ModalContainer, Close, ModalSection } from './styled'
import { H1 } from '../Foundation/Text'

type Props = {
  type: string
  withClose?: boolean
}

const ModalComponent: React.FC<Props> = (props): JSX.Element => {
  const { controllers } = useMarketplaceV2()
  const { modal } = controllers
  const { withClose, type, children } = props
 
  return (
    <Modal open={modal.openModal[type] ?? false} onClose={() => modal.handleClose(type)}>
      <ModalContainer>
        {withClose && (
          <div style={{ textAlign: 'right' }}>
            <Close
              name="auth"
              onClick={() => modal.handleClose(type)}
              variant="text"
              style={{ width: '24px', height: '24px' }}
            >
              <FaWindowClose />
            </Close>
          </div>
        )}
        {children}
      </ModalContainer>
    </Modal>
  )
}

export default ModalComponent
