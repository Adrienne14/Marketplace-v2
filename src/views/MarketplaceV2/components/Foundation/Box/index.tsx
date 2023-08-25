import React from 'react'
import styled from 'styled-components'
import { DEFAULT_BORDERS } from 'views/MarketplaceV2/styles/constants'

const Box = () => {
  return (
    <div>Box</div>
  )
}

export default Box


export const MiniBox = styled.div`
  border-radius: 5px;
  border: ${DEFAULT_BORDERS};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => (theme.colors.text)};
  padding: 5px;
  margin: 5px 0;
  font-size: 1em;
  background-color: #131737;
`
