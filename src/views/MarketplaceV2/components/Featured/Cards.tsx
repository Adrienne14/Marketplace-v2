import React from 'react'
import { Grid } from '@mui/material'
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
      columnGap={{ xs: 2 }}
      sx={{
        overflowX: 'scroll',
        overflowY: 'hidden',
        overflow: 'auto',
      }}
    >
      {items.map((item, ind) => {
        const id = ind+1
        return (
          <Grid key={id} item alignItems="center" xs={12} md={6}>
            <Card {...item} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Cards
