import React, { useState, useEffect } from 'react'
import { Flex, IconButton } from '@metagg/mgg-uikit'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import Iconloader from 'views/MarketplaceV2/components/Foundation/Iconloader'
import MarketPlaceButton from 'views/MarketplaceV2/components/Foundation/Button'
import { H2, H3, H5, P, TextWrapper } from 'views/MarketplaceV2/components/Foundation/Text'
import Box, { MiniBox } from '../../components/Foundation/Box'
import withGridLayout from './withGridLayout'
import Main from '../Main'
import { FIELD_INFO } from './index.d'
import { Button, ContentWrapper, NavButton, NavDiv } from './styled'
import Cointable from './Cointable'
import Table from './Table'
import TxTab from './TxTab'


// Tempdata collection

const tempStats = {
  basicInfo: {
    email: 'email.add@mgg.com',
    wallet: '0x0000',
    credit: 'NA',
  },
}

const tempData = [
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

const UserMain = (props) => {
  const { txData: {coin, nft}, tabController: {active} } = props
  const txD = React.useMemo(() => active === 0? coin : nft, [active, coin, nft])

  const boxInfo = (name: string) => {
    return (
      <Flex alignItems="center" justifyContent="space-between">
        <H2 fsize="1.5em">{name}</H2>
        <Flex justifyContent="space-between" flex="0.2">
          <IconButton variant="text" className="icon-button">
            <MiniBox m="0">
              <Iconloader type="fa" name="Redo" fontSize="1em" />
            </MiniBox>
          </IconButton>
          <IconButton variant="text" className="icon-button">
            <MiniBox m="0">
              <Iconloader type="fa" name="InfoCircle" fontSize="1em" />
            </MiniBox>
          </IconButton>
        </Flex>
      </Flex>
    )
  }

  const renderInfo = () => {
    return (
      <StyledBox p="1em">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={10}>
            <Grid container spacing={{ xs: 1, sm: 2 }}>
              {Object.entries(tempStats.basicInfo).map((stat) => {
                const field = FIELD_INFO[`${stat[0]}`]
                const val = stat[1]
                return (
                  <>
                    <Grid item xs={12} sm={5}>
                      <H5 fsize="0.9em">{field}</H5>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <P fsize="0.9em">: {val}</P>
                    </Grid>
                  </>
                )
              })}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2} display="flex" alignItems="center" justifyContent="center">
            <IconButton variant="text" className="icon-button">
              <MiniBox>
                <Iconloader type="fa" name="Edit" fontSize="1em" />
              </MiniBox>
            </IconButton>
          </Grid>
        </Grid>
      </StyledBox>
    )
  }

  const renderPoint = () => {
    return (
      <StyledBox p="1em">
        {boxInfo('point')}
        <Grid container columnSpacing={{ xs: 2, md: 5 }} mt={2}>
          <Grid item xs={9}>
            <MiniBox m="0">
              <P fsize="0.9em">123456 MGG | 0.00</P>
            </MiniBox>
          </Grid>
          <Grid item xs={3}>
            <Button h="100%">BUY</Button>
          </Grid>
        </Grid>
      </StyledBox>
    )
  }

  const renderCoin = () => (
    <StyledBox p="1em">
      {boxInfo('coin')}
      <MiniBox p="0.5em" m="0.5em 0">
        <Cointable />
      </MiniBox>
      <Flex justifyContent="center">
        <MarketPlaceButton variant="text" style={{ justifyContent: 'center', width: '100%' }}>
          <TextWrapper>
            <H3>WITHDRAW</H3>
          </TextWrapper>
        </MarketPlaceButton>
        <Button w="20%">BUY</Button>
      </Flex>
    </StyledBox>
  )

  const renderActivityHistory = () => (
    <StyledBox p="1em">
      <Flex alignItems="center" justifyContent="space-between">
        <H2 fsize="1.5em">Activity History</H2>
        <MarketPlaceButton title="View All" style={{ justifyContent: 'center' }} />
      </Flex>
      <MiniBox p="2em 0.5em" m="0.5em 0">
        <Table data={tempData} />
      </MiniBox>
    </StyledBox>
  )

  const renderTxHistory = () => (
    <StyledBox p="1em">
      <Flex alignItems="center" justifyContent="space-between">
        <H2 fsize="1.5em">Transaction History</H2>
        <MarketPlaceButton title="View All" style={{ justifyContent: 'center' }} />
      </Flex>
      <TxTab tabController={props.tabController} />
      <MiniBox p="0.5em" m="0 0 0.5em  0">
        <Table data={txD} />
      </MiniBox>
    </StyledBox>
  )

  return (
    <ContentWrapper>
      {renderInfo()}
      {renderPoint()}
      {renderCoin()}
      {renderActivityHistory()}
      {renderTxHistory()}
    </ContentWrapper>
  )
}

const WrappedMain = withGridLayout(UserMain)

const User = () => {
  const [active, setActive] = useState(0)
  return (
    <Main>
      <TextWrapper>
        <StyledDiv>
          <Grid container spacing={5}>
            <WrappedMain
              {...{ mediaQ: { xs: 12, md: 6, lg: 5 }, tabController: { active, setActive }, txData: { ...tempTx } }}
            />
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
const StyledBox = styled(Box).attrs({ className: 'secondary-drop-shadow' })<{ p?: string }>`
  word-wrap: break-word;
`
