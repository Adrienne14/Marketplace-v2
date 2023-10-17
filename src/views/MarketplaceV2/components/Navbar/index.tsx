import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import useMarketplaceV2 from 'hooks/useMarketplaceV2'
import { HEIGHT, PADDING } from 'views/MarketplaceV2/styles/constants'
import { marketplaceURL } from 'views/MarketplaceV2/constants/config'
import Logo from '../Foundation/Logo'
import Anchor from '../Foundation/Anchor'
import { useAppDispatch } from '../../../../state'
import { usePlayfabUser } from '../../../../state/hooks'
import { fetchPlayfabUser } from '../../../../state/playfab'

const Navbar = () => {
  const { controllers } = useMarketplaceV2()
  const { theme } = useTheme()
  const { modal } = controllers
  const dispatch = useAppDispatch()

  const HandleSignIn = async () => {
    console.log('attempt sign in')
    // Test login on dummy account
    const user = await dispatch(fetchPlayfabUser({ login: 'tester17', password: '123123' }))

    console.log('Playfab User:')
    console.log(user.payload)
  }

  return (
    <StyledNav>
      <Anchor href={marketplaceURL}>
        <Logo size={60} />
      </Anchor>
      <StyledBtn onClick={() => HandleSignIn()}>Sign in</StyledBtn>
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

const StyledBtn = styled.button``
