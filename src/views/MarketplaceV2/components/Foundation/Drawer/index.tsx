import React from 'react'
import styled from 'styled-components'
import { IconButton, Flex } from '@metagg/mgg-uikit'
import { SwipeableDrawer } from '@mui/material'
import { COLORS, DEFAULT_BORDERS } from 'views/MarketplaceV2/styles/constants'
import { Props } from './index.d'
import Iconloader from '../Iconloader'

const Drawer: React.FC<Props> = ({ children, ...props }) => {
  const { anchor, openState, handleClose, handleOpen } = props
  return (
    <SwipeableDrawer
      anchor={anchor}
      open={openState}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <StyledDiv>
        <Flex justifyContent="flex-end">
          <Close variant="text" className="icon-button" style={{ width: '24px', height: '24px' }} onClick={handleClose}>
            <Iconloader type="Fa" name="WindowClose" />
          </Close>
        </Flex>
        <MainContent>{children}</MainContent>
      </StyledDiv>
    </SwipeableDrawer>
  )
}

export default Drawer

const StyledDiv = styled.div`
  min-width: 100vw;
  height: 100%;
  background-color: ${COLORS.CARD};
  border: ${DEFAULT_BORDERS};

  ${({theme}) => (`
    ${theme.mediaQueries.sm} {
      min-width: 30vw;
    }
  `)}
`
const MainContent = styled.div`
  padding: 1em;
`
const Close = styled(IconButton)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.MGG_accent2};
`
