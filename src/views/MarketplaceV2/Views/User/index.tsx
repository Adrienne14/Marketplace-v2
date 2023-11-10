import React, { useState } from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import { TextWrapper } from 'views/MarketplaceV2/components/Foundation/Text'
import withGridLayout from './withGridLayout'
import Main from '../Main'
import UserMain from './Usermain'
import NftCollection from './NftCollection'

// Tempdata collection

const tempStats = {
  basicInfo: {
    email: 'email.add@mgg.com',
    wallet: '0x0000',
    credit: 'NA',
  },
}

const tempActivityData = [
  {
    date: '2023.07.27',
    status: 'Success',
    tx: 'Buy',
    amount: '102.00',
    type: 'Market Money',
  },
  {
    date: '2023.07.27',
    status: 'Fail',
    tx: 'Buy',
    amount: '102.00',
    type: 'Market Money',
  },
]

const tempTx = {
  coin: [
    {
      date: '2023.07.27',
      status: 'Success',
      tx: 'Buy',
      amount: '102.00',
      type: 'Market Money',
    },
  ],
  nft: [
    {
      date: '2023.07.27',
      status: 'Success',
      tx: 'Buy',
      amount: '102.00',
      type: 'Market Money',
    },
    {
      date: '2023.07.27',
      status: 'Fail',
      tx: 'Buy',
      amount: '102.00',
      type: 'Market Money',
    },
  ],
}

// Tempdata collection -- end

const WrappedMain = withGridLayout(UserMain)
const WrappedNftList = withGridLayout(NftCollection)

const User = () => {
  const [active, setActive] = useState(0)
  return (
    <Main>
      <TextWrapper>
        <StyledDiv>
          <Grid container spacing={5}>
            <WrappedMain
              {...{
                mediaQ: { xs: 12, md: 6, lg: 5 },
                tabController: { active, setActive },
                txHistory: { ...tempTx },
                activityHistory: tempActivityData,
                stats: tempStats,
              }}
            />
            <WrappedNftList {...{ mediaQ: { xs: 12, md: 6, lg: 7 } }} />
          </Grid>
        </StyledDiv>
      </TextWrapper>
    </Main>
  )
}

export default User

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  padding: 15px 0px;
`
