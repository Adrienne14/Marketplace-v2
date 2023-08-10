import React from 'react'
import styled from 'styled-components'
import { FONTSTYLE, HEIGHT, PADDING } from 'views/MarketplaceV2/styles/constants'
import { FiLogIn, FiUser } from 'react-icons/fi'
import { Button, useModal } from '@metagg/mgg-uikit'
import useMarketplaceV2 from 'hooks/useMarketplaceV2'
import useFirebaseAuth from 'hooks/useFirebaseAuth'
import Logo from '../Foundation/Logo'
import Authentication from '../Foundation/Authentication'

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

const Navbar = () => {
  const { controllers } = useMarketplaceV2()
  const { modal } = controllers
  const { logout, user } = useFirebaseAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <StyledNav>
      <Logo size={60} />
      {!user ? (
        <ConnectApp onClick={modal.handleOpen} variant="text">
          <FiLogIn /> &nbsp; Sign In
        </ConnectApp>
      ) : (
        <ConnectApp onClick={handleLogout}>
          <FiUser />
        </ConnectApp>
      )}
      <Authentication />
    </StyledNav>
  )
}

export default Navbar
