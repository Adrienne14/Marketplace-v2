import React, { useState, useEffect } from 'react'
import { Flex, IconButton } from '@metagg/mgg-uikit'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import Iconloader from 'views/MarketplaceV2/components/Foundation/Iconloader'
import { H2, H5, P, TextWrapper } from 'views/MarketplaceV2/components/Foundation/Text'
import Box, { MiniBox } from '../../components/Foundation/Box'
import withGridLayout from './withGridLayout'
import Main from '../Main'
import { FIELD_INFO } from './index.d'
import { ContentWrapper } from './styled'

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
      <StyledBox>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={10}>
            <Grid container spacing={{ xs: 1, sm: 2 }}>
              {Object.entries(tempStats.basicInfo).map((stat) => {
                const field = FIELD_INFO[`${stat[0]}`]
                const val = stat[1]
                return (
                  <>
                    <Grid item xs={12} sm={5}>
                      <H5 fsize="0.7em">{field}</H5>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <P fsize="0.7em">: {val}</P>
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
      <StyledBox>
        <Flex>
          <H2 fsize="1.5em">POINT</H2>
        </Flex>
      </StyledBox>
    )
  }

  return (
    <ContentWrapper>
      {renderInfo()}
      {renderPoint()}
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
const StyledBox = styled(Box).attrs({ className: 'secondary-drop-shadow' })`
  word-wrap: break-word;
`
