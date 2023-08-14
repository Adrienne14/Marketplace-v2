import React from 'react'
import { Grid } from '@mui/material'
import styled from 'styled-components'
import Card from '../Card'
import './style.css'


const Cards = (props) => {
  const { items } = props
  return (
    <Grid
      className="scrollable-container"
      container
      wrap="nowrap"
      mt={5}
      pb={5}
      columnSpacing={{ xs: 2 }}
      sx={{
        overflowX: 'scroll',
        overflowY: 'hidden',
        overflow: 'auto',
      }}
    >
      {items.map((item, ind) => {
        const id = ind + 1
        return (
          <Grid key={id} item alignItems="center" xs={12}>
            <StyledDiv>
              <Card {...item} />
            </StyledDiv>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Cards

const StyledDiv = styled.div`
  min-width: 220px;
  ${({theme}) => (`
    ${theme.mediaQueries.xl} {
      min-width: 250px;
    }
  `)}
`
