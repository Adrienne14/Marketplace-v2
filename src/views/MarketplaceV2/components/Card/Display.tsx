import React from 'react'
import { GoogleDriveLink } from 'views/MarketplaceV2/constants/config'
import { QueryType, useQueryAsset } from 'hooks/useMarketplaceV2'
import { Display } from './styled'
import SvgIcon from '../Foundation/SvgIcon'

type Props = {
  spriteName: string
}

const SpriteDisplay = ({spriteName}:Props) => {
  
  const spriteId = useQueryAsset({
    name: spriteName,
    type: QueryType.SPRITES
  })

  const src = GoogleDriveLink + spriteId
  const Img = <img alt="logo" src={src} />
  return (
    <Display bg={src}>
      <SvgIcon Img={Img} width={130} height={130} />
    </Display>
  )
}

export default SpriteDisplay