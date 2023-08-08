import React from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import { COLORS } from 'views/MarketplaceV2/styles/constants'
import { sectionProp } from '../Foundation/layout'
import Card from '../Card'

const Container = styled.div`
  ${sectionProp}
  background-color: transparent;
  display: flex;
  align-items: center;
  position: relative;
  min-height: inherit;
`

const Board = styled(Grid)`
  flex: 1;
  background: linear-gradient(0deg, rgba(41, 30, 92, 1) 0%, rgba(210, 136, 244, 1) 0%, rgba(9, 9, 121, 1) 100%);
  padding: 10px;
  justify-content: center;
  align-items: center;
`

const placeholder = {
  name: 'Voidmancer',
  spriteName: 'Voidmancer- Wizard',
  rarity: 'Rare',
  badge: 'Wizard',
  price: {
    token: '100 MGG',
    fiat: '1000',
  },
}

export default function Featured() {
  return (
    <Container>
      <Board container spacing={{ xs: 2 }}>
        <Grid item alignItems="center">
          <Card {...placeholder} />
        </Grid>
      </Board>
    </Container>
  )
}
