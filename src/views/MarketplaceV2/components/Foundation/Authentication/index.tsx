import React, { useEffect, useState } from 'react'
import { Modal } from '@mui/material'
import { FaWindowClose } from 'react-icons/fa'
import useMarketplaceV2 from 'hooks/useMarketplaceV2'
import { COLORS } from 'views/MarketplaceV2/styles/constants'
import UnlockButton from '../UnlockButton'
import { Box, Close, ModalContainer, ModalSection, StyledButton } from './styled'
import { TextWrapper, H1 } from '../Text'
import RegistrationForm from './RegistrationForm'
import SignInForm from './SignInForm'

const Authentication: React.FC = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false)
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const { controllers } = useMarketplaceV2()
  const { modal } = controllers

  useEffect(() => {
    if (!modal.openModal) {
      setIsLogin(false)
      setIsRegister(false)
    }
  }, [setIsLogin, setIsRegister, modal.openModal])

  return (
    <Modal open={modal.openModal} onClose={modal.handleClose} aria-labelledby="auth-modal">
      <ModalContainer>
        <ModalSection>
          <div style={{ textAlign: 'right' }}>
            <Close onClick={modal.handleClose} variant="text" style={{ width: '24px', height: '24px' }}>
              <FaWindowClose />
            </Close>
          </div>
          {!isLogin && (
            <Box>
              <TextWrapper align="center" lineHeight="2em">
                <H1 fsize="1.5em">Click here for new registration</H1>
                {!isRegister ? (
                  <StyledButton onClick={() => setIsRegister(true)}>REGISTER</StyledButton>
                ) : (
                  <RegistrationForm />
                )}
              </TextWrapper>
            </Box>
          )}
          {!isRegister && !isLogin && <hr />}
          {!isRegister && (
            <Box>
              <TextWrapper align="center" lineHeight="2em">
                {!isLogin && <H1 fsize="1.5em">If you have an account, click here</H1>}
                {!isLogin ? (
                  <StyledButton bg={COLORS.MAIN} onClick={() => setIsLogin(true)}>
                    SIGN IN
                  </StyledButton>
                ) : (
                 <SignInForm />
                )}
              </TextWrapper>
            </Box>
          )}
        </ModalSection>
        {isLogin && (
          <ModalSection>
            <UnlockButton customTitle="Login with wallet connection" />
          </ModalSection>
        )}
      </ModalContainer>
    </Modal>
  )
}

export default Authentication
