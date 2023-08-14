import React from 'react'
import styled from 'styled-components'
import { Modal } from '@mui/material'
import { Button, IconButton } from '@metagg/mgg-uikit'
import useMarketplaceV2 from 'hooks/useMarketplaceV2'
import { H1, TextWrapper, H3 } from '../Foundation/Text'
import { ModalContainer, ModalSection } from '../Foundation/Authentication/styled'
import { MiniBox } from '../Foundation/Box'

const BuyModal: React.FC<any> = (props) => {
  const { name } = props
  const { controllers } = useMarketplaceV2()
  const { modal } = controllers
  return (
    <Modal open={modal.openModal?.buy} onClose={() => modal.handleClose('buy')} aria-labelledby="buy-modal">
      <ModalContainer>
        <ModalSection>
          <TextWrapper align="center">
            <H1>PAYMENT METHOD</H1>
          </TextWrapper>
          <Actions className="payment-options">
            <Button className="payment-option">CREDIT CARD</Button>
            <Button className="payment-option">Crypto USDT (BEP-20)</Button>
            <Button className="payment-option">Crypto USDT (ERC-20)</Button>
          </Actions>
          <Actions>
            <Button variant="text" margin="0 auto" padding="0" onClick={() => modal.handleClose('buy')}>
              <MiniBox>
                <H3>Okay</H3>
              </MiniBox>
            </Button>
          </Actions>
        </ModalSection>
      </ModalContainer>
    </Modal>
  )
}

export default BuyModal

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &.payment-options {
    margin: 10px 0;
    padding: 10px 0;
  }
  & > button.payment-option {
    width: 100%;
    height: 40px;
    margin: 5px 0;
  }
`
