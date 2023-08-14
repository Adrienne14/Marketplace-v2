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
  return (
    <StyledNav>
      <Logo size={60} />
    </StyledNav>
  )
}

export default Navbar

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
