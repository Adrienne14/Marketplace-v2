import styled from 'styled-components'
import { Button } from '@metagg/mgg-uikit'
import { customSpacingProps } from 'views/MarketplaceV2/styles/constants'
import { Margins, Paddings } from 'views/MarketplaceV2/styles/index.d'
import { MiniBox } from '../Box'

export const DefaultButton = styled(Button)<Margins & Paddings>`
  font-family: 'One Splice' !important;
  ${({ p, pt, pb, pl, pr }) => customSpacingProps({ p, pt, pb, pl, pr })}
  ${({ m, mt, mb, ml, mr }) => customSpacingProps({ m, mt, mb, ml, mr })}
`

export const StyledButton = styled(DefaultButton)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1em;
  margin: 0 5px;
  padding: 0;
  border-radius: 5px;
`

export const StyledMiniBox = styled(MiniBox)`
  height: 100%;
  justify-content: flex-start;
  width: 100px;
`
