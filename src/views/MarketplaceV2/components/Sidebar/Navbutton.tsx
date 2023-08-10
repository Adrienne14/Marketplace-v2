import React from 'react'
import { DEFAULT_BORDERS } from 'views/MarketplaceV2/styles/constants'
import styled from 'styled-components'
import Link from '../Foundation/Anchor'
import { MiniBox as Box } from '../Foundation/Box'

const Navbutton: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <Link href={href}>
      <Box>{children}</Box>
    </Link>
  )
}

export default Navbutton
