import React from 'react'
import styled from 'styled-components'
import { HEIGHT, PADDING } from 'views/MarketplaceV2/styles/constants'
import { FaBars } from 'react-icons/fa'
import { Button, useModal } from '@metagg/mgg-uikit'
import useMarketplaceV2 from 'hooks/useMarketplaceV2'
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
`

const Navbar = () => {
  const { controllers } = useMarketplaceV2()
  const { modal } = controllers
  return (
    <StyledNav>
      <Logo size={60} />
      <ConnectApp onClick={modal.handleOpen} variant="text">
        <FaBars />
      </ConnectApp>
      <Authentication />
    </StyledNav>
  )
}

export default Navbar
