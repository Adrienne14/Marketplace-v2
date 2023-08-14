import React from 'react'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import { FONTSTYLE, HEIGHT, PADDING } from 'views/MarketplaceV2/styles/constants'
import { Button, useModal } from '@metagg/mgg-uikit'
import useMarketplaceV2 from 'hooks/useMarketplaceV2'
import useFirebaseAuth from 'hooks/useFirebaseAuth'
import Logo from '../Foundation/Logo'
import Authentication from '../Foundation/Authentication'
import Iconloader from '../Foundation/Iconloader'
import { TextWrapper, H3 } from '../Foundation/Text'


const Navbar = () => {
  const { controllers } = useMarketplaceV2()
  const { theme } = useTheme()
  const { modal } = controllers
  const { logout, user } = useFirebaseAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <StyledNav>
      <Logo size={60} />
      {!user ? (
        <ConnectApp onClick={modal.handleOpen} variant="text" className="icon-button">
          <TextWrapper>
            <H3 color={theme.colors.MGG_accent2}>
              <Iconloader {...iconSettings.signIn} /> &nbsp; Sign In
            </H3>
          </TextWrapper>
        </ConnectApp>
      ) : (
        <ConnectApp onClick={handleLogout} className="icon-button">
          <Iconloader {...iconSettings.user} />
        </ConnectApp>
      )}
      <Authentication />
    </StyledNav>
  )
}

export default Navbar

const iconSettings = {
  signIn: {
    type: 'fi',
    name: 'LogIn',
  },
  user: {
    type: 'fi',
    name: 'User',
  },
}

const StyledNav = styled.nav`
  height: ${HEIGHT.MENU}vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${PADDING.MAIN.SP}px;
  ${({ theme }) => `
    ${theme.mediaQueries.sm} {
      justify-content: space-between;
      padding: ${PADDING.MAIN.MP}px;
    }

    ${theme.mediaQueries.md}{
      padding: 0 ${PADDING.MAIN.LG}px 0 ${PADDING.MAIN.LG}px;
    }
  `}
`
const ConnectApp = styled(Button)`
  color: ${({ theme }) => theme.colors.MGG_accent2};
  border-radius: 10px;
  padding: 5px;
  font-family: ${FONTSTYLE.font2};
  font-weight: 300;
`
