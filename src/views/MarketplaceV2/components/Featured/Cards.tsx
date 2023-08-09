import React from 'react'
import { Grid } from '@mui/material'
import Card from '../Card'

const Cards = (props) => {
  const { items } = props
  return (
      <Grid
        container
        wrap="nowrap"
        mt={5}
        columnGap={{ xs: 4 }}
        sx={{
          overflowX: 'scroll',
          overflowY: 'hidden',
          overflow: 'auto',
        }}
      >
        {items.map((item) => {
          return (
            <Grid item alignItems="center" xs={12}>
              <Card {...item} />
            </Grid>
          )
        })}
      </Grid>
  )
}

export default Cards
