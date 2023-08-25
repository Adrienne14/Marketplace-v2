import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Grid } from '@mui/material'
import styled from 'styled-components'
import { Flex } from '@metagg/mgg-uikit'
import { GoogleDriveLink } from 'views/MarketplaceV2/constants/config'
import { QueryType, useQueryAsset } from 'hooks/useMarketplaceV2'
import { useMarketplaceV2FetchItem } from 'hooks/useMarketplaceV2Data'
import Field from 'views/MarketplaceV2/components/Foundation/Field'
import SvgIcon from 'views/MarketplaceV2/components/Foundation/SvgIcon'
import { H3, H4, P, TextWrapper } from 'views/MarketplaceV2/components/Foundation/Text'
import SpriteDisplay from 'views/MarketplaceV2/components/Card/Display'
import Main from '../Main'
import Box, { MiniBox } from '../../components/Foundation/Box'
import { ContentWrapper } from './styled'

const withGridLayout = (WrappedComponent) => {
  return (props) => {
    const [loaded, setIsLoaded] = React.useState(false)
    const { nftId } = props
    const { selected: nft } = useMarketplaceV2FetchItem(nftId)

    React.useEffect(() => {
      if (nft) {
        setTimeout(() => setIsLoaded(true), 2000)
      }
      return () => clearTimeout(setTimeout(() => setIsLoaded(true), 2000))
    }, [nft])

    const modifiedProps = {
      item: nft,
      ...props,
    }
    return (
      <Grid item xs={12} sm={6}>
        {loaded ? <WrappedComponent {...modifiedProps} /> : <>Loading...</>}
      </Grid>
    )
  }
}

const NftMain = (props) => {
  const { item } = props
  const style = {
    minHeight: '300px',
  }
  return (
    <ContentWrapper>
      <Flex justifyContent="center">
        <H3 fsize="1.5em">{item.name}</H3>
      </Flex>
      <div style={{ width: '70%' }}>
        <SpriteDisplay {...{ spriteName: item.spriteName, width: 150, height: 150, style }} />
      </div>
      <Box className="secondary-drop-shadow">
        <TextWrapper align="center">
          <H4 fsize="1.5em">MGG 100.00</H4>
          <P fsize="0.7em" mt="1em">
            This Latest data is being acquired. It will be available for purchase as soon as the latest data is updated.
          </P>
        </TextWrapper>
      </Box>
    </ContentWrapper>
  )
}

const NftDetails = (props) => {
  // Update with real data
  const stats = {
    Health: '100',
    Damage: '10',
    'Attack Speed': '0.75',
    'Critical Damage': '20',
    'Critical Chance': '25%',
  }

  const { item } = props
  const badgeId = useQueryAsset({ name: item.badge, type: QueryType.BADGES })
  const src = GoogleDriveLink + badgeId
  const badgeImg = <img alt="badge-logo" src={src} />
  const renderStats = () => (
    <Grid container spacing={1} mt={1}>
      {Object.entries(stats).map((s, ind) => {
        const key = ind + 1
        const st = { ...s }
        return (
          <Grid item xs={12} sm={6} key={key}>
            <Field {...{ [`${st[0]}`]: st[1] }} />
          </Grid>
        )
      })}
    </Grid>
  )

  const renderSkill = () => {
    return (
      <Grid container mt={1} spacing={2}>
        <Grid item xs={7}>
          <MiniBox p="1em" >
            <Flex flexDirection="column">
              <TextWrapper align="left">
                <P fsize="1em" mt="0.5em" mb="0.5em">
                  Starfall
                </P>
                <P fsize="0.6em">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptate quo, cumque nesciunt repellat
                  ab animi nihil, nemo a quibusdam sint.
                </P>
              </TextWrapper>
            </Flex>
          </MiniBox>
        </Grid>
        <Grid item xs={5}>
          <Flex alignItems="center" style={{ width: '100%', height: '100%' }}>
            <SvgIcon Img={badgeImg} width={150} height={150} />
          </Flex>
        </Grid>
      </Grid>
    )
  }

  return (
    <ContentWrapper>
      <Box className="secondary-drop-shadow">
        <Flex>
          <H4 fsize="1.5em">Vigar Status</H4>
        </Flex>
        {renderStats()}
      </Box>
      <Box className="secondary-drop-shadow">
        <Flex>
          <H4 fsize="1.5em">Special Skill</H4>
        </Flex>
        {renderSkill()}
      </Box>
    </ContentWrapper>
  )
}
const WrappedMain = withGridLayout(NftMain)
const WrappedDetails = withGridLayout(NftDetails)

const NftPage: React.FC<RouteComponentProps<{ nftID: string }>> = ({
  match: {
    params: { nftID },
  },
}) => {
  return (
    <Main>
      <StyledDiv>
        <Grid container spacing={5}>
          <WrappedMain nftId={nftID} />
          <WrappedDetails nftId={nftID} />
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
`
