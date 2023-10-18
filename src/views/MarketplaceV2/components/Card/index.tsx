import React, { useMemo, useCallback } from 'react'
import useMarketplaceV2, { useQueryAsset, QueryType } from 'hooks/useMarketplaceV2'
import useTheme from 'hooks/useTheme'
import { GoogleDriveLink } from 'views/MarketplaceV2/constants/config'
import { Props } from './index.d'
import { CardContainer, Details, CardText as TextBox, Button } from './styled'
import { H5, P } from '../Foundation/Text'
import PurchaseNFT from '../Modals/Buy-nft'
import Header from './Header'
import SpriteDisplay from './Display'

export default function Card(props: Props) {
  const { theme } = useTheme()
  const { name, spriteName, rarity, price, badge } = props
  const { controllers } = useMarketplaceV2()
  const { modal } = controllers

  return (
    <>
      <CardContainer className="secondary-drop-shadow">
        <Header {...{ name, rarity, badge }} />
        <SpriteDisplay {...{ spriteName }} />
        <Details>
          <TextBox>
            <H5 fsize="0.8em">Current Price</H5>
            <P fsize="1em" color={theme.colors.MGG_accent2}>
              {price.token}
            </P>
            <P fsize="0.8em">${price.fiat}</P>
          </TextBox>
          <Button onClick={() => modal.handleOpen(`buy-${name}`)}>BUY</Button>
        </Details>
      </CardContainer>
      {modal.openModal[`buy-${name}`] && <PurchaseNFT {...props} />}
    </>
  )
}
