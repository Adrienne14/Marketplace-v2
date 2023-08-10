import React from 'react'
import { DEFAULT_BORDERS } from 'views/MarketplaceV2/styles/constants'
import styled from 'styled-components'
import Link from '../Anchor'

const Navbutton: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <Link href={href}>
      <Box>{children}</Box>
    </Link>
  )
}

export default Navbutton

const Box = styled.div`
  border-radius: 5px;
  border: ${DEFAULT_BORDERS};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => (theme.colors.text)};
  padding: 5px;
  margin: 5px 0;
  font-size: 1.2em;
  background-color: #131737;
`
