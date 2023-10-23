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
import { Button, ContentWrapper } from './styled'

const tempStats = {
  basicInfo: {
    email: 'email.add@mgg.com',
    wallet: '0x0000',
    credit: 'NA',
  },
}

const UserMain = (props) => {
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

  const renderPoint = () => {
    return (
      <StyledBox p="1em">
        {boxInfo('point')}
        <Grid container columnSpacing={{ xs: 2, md: 5 }} mt={2}>
          <Grid item xs={9}>
            <MiniBox m="0">
              <P>123456 MGG | 0.00</P>
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
      <MiniBox>test</MiniBox>
      <Flex justifyContent='center'>
        <MarketPlaceButton variant="text" style={{ justifyContent: 'center', width: '100%' }}>
          <TextWrapper>
            <H3>WITHDRAW</H3>
          </TextWrapper>
        </MarketPlaceButton>
        <Button w="20%">BUY</Button>
      </Flex>
    </StyledBox>
  )

  return (
    <ContentWrapper>
      {renderInfo()}
      {renderPoint()}
      {renderCoin()}
    </ContentWrapper>
  )
}

const WrappedMain = withGridLayout(UserMain)

const User = () => {
  return (
    <Main>
      <TextWrapper>
        <StyledDiv>
          <Grid container spacing={5}>
            <WrappedMain {...{ mediaQ: { xs: 12, md: 6, lg: 5 } }} />
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
