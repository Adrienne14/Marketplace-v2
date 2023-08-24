import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Grid } from '@mui/material'
import styled from 'styled-components'
import { Flex } from '@metagg/mgg-uikit'
import { useMarketplaceV2FetchItem } from 'hooks/useMarketplaceV2Data'
import { H3, TextWrapper } from 'views/MarketplaceV2/components/Foundation/Text'
import SpriteDisplay from 'views/MarketplaceV2/components/Card/Display'
import Main from '../Main'
import { Box } from './styled'

const NftPage: React.FC<RouteComponentProps<{ nftID: string }>> = ({
  match: {
    params: { nftID },
  },
}) => {
  const { selected: nft } = useMarketplaceV2FetchItem(nftID)

  const withGridLayout = (WrappedComponent) => {
    return (props) => {
      const modifiedProps = {
        item: nft,
        ...props,
      }
      return (
        <Grid item xs={6}>
          <WrappedComponent {...modifiedProps} />
        </Grid>
      )
    }
  }

  const NftMain = (props) => {
    const { item } = props
    const style = {
      minHeight: '200px',
    }
    return (
      <Box>
        <Flex justifyContent="center">
          <H3>{item.name}</H3>
        </Flex>
        <div style={{ width: '50%' }}>
          <SpriteDisplay {...{ spriteName: item.spriteName, width: 125, height: 125, style }} />
        </div>
      </Box>
    )
  }

  const NftDetails = () => <Box>2</Box>

  const WrappedMain = withGridLayout(NftMain)
  const WrappedDetails = withGridLayout(NftDetails)

  return (
    <Main>
      <StyledDiv>
        <Grid container>
          <WrappedMain />
        </Grid>
      </StyledDiv>
    </Main>
  )
}

export default NftPage

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  padding: 15px 0px;
  border: 1px solid red;
`
