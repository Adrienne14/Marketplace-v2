import React, { useMemo, useCallback } from 'react'
import useMarketplaceV2, { useQueryAsset, QueryType } from 'hooks/useMarketplaceV2'
import { Flex } from '@metagg/mgg-uikit'
import useTheme from 'hooks/useTheme'
import { Props, RarityColors } from './index.d'
import { CardContainer, CardHeader, HeaderTxt, Display, Details, DetailsTxt, Button } from './styled'
import { H2, H5, P } from '../Foundation/Text'
import SvgIcon from '../Foundation/SvgIcon'
import Circle from '../Foundation/Circle'

export default function Card(props: Props) {
  const { name, spriteName, rarity, price, badge } = props
  const { controllers } = useMarketplaceV2()
  const { modal } = controllers
  const { theme } = useTheme()
  const badgeId = useQueryAsset({ name: badge, type: QueryType.BADGES })
  const spriteId = useQueryAsset({ name: spriteName, type: QueryType.SPRITES })
  // const spriteId = sprites
  const badgeSrc = `https://drive.google.com/uc?id=${badgeId}`
  const spriteSrc = `https://drive.google.com/uc?id=${spriteId}`
  const BadgeImg = <img alt="logo" src={badgeSrc} />
  const SpriteImg = <img alt="logo" src={spriteSrc} />
 // Query 
  const renderCircles = () => (
    <Flex justifyContent="space-evenly">
      {['#4bdffe', '#ee89ff', '#95ff88'].map((clr) => (
        <Circle key={clr} color={clr} />
      ))}
    </Flex>
  )

  return (
    <>
      <CardContainer className="secondary-drop-shadow">
        <CardHeader>
          <HeaderTxt>
            <H2 fsize="1em">{name.toUpperCase()}</H2>
            <Flex alignItems="center">
              <P color={RarityColors[`${rarity.toUpperCase()}`]} fsize="0.8em">
                {rarity}
              </P>
              &nbsp;
              {renderCircles()}
            </Flex>
          </HeaderTxt>
          <SvgIcon Img={BadgeImg} width={50} height={50} />
        </CardHeader>
        <Display bg={spriteSrc}>
          <SvgIcon Img={SpriteImg} width={130} height={130} />
        </Display>
        <Details>
          <DetailsTxt>
            <H5 fsize="0.8em">Current Price</H5>
            <P fsize="1em" color={theme.colors.MGG_accent2}>
              {price.token}
            </P>
            <P fsize="0.8em">${price.fiat}</P>
          </DetailsTxt>
          <Button onClick={() => modal.handleOpen('buy')}>BUY</Button>
        </Details>
      </CardContainer>
    </>
  )
}
