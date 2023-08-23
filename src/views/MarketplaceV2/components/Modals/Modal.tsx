import React from 'react'
import { Modal } from '@mui/material'
import useMarketplaceV2 from 'hooks/useMarketplaceV2'
import { FaWindowClose } from 'react-icons/fa'
import { Button, Flex } from '@metagg/mgg-uikit'
import useTheme from 'hooks/useTheme'
import { ModalContainer, Close } from './styled'
import { H1, H3, P, TextWrapper } from '../Foundation/Text'
import Iconloader from '../Foundation/Iconloader'
import { MiniBox } from '../Foundation/Box'
import { Props, ConfirmProps } from './index.d'
import './modal.css'

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

export const ConfirmComponent: React.FC<ConfirmProps> = (props) => {
  const { theme } = useTheme()
  const { type, icon, description } = props;
  return (
    <Flex flexDirection='column' alignItems='center' className='modal-confirm-container'>
      <H1 fsize='1.5em'>
        {type.toUpperCase()}
      </H1>
      <Iconloader type="fa" name={icon} style={{ color: theme.colors.MGG_accent1, fontSize: '5em', margin: '0.5em' }} />
      <TextWrapper align="center">
        <P>
          { description }
        </P>
      </TextWrapper>
      <MiniBox style={{ height: '40px', padding: '15px', margin: '25px 0' }}>
        <Button className="icon-button with-animation-enlarge" variant="text" margin="0 auto" padding="0">
          <H3>
            Okay
          </H3>
        </Button>
      </MiniBox>
    </Flex>
  )
}