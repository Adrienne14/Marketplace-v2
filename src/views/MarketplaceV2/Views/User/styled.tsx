import { Button as MGGButton } from '@metagg/mgg-uikit';
import styled from 'styled-components'
import { DefaultButton } from 'views/MarketplaceV2/components/Foundation/Button/styled'
import { COLORS } from 'views/MarketplaceV2/styles/constants';

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > * {
    margin: 1em 0px;
  }
`
export const Button = styled(DefaultButton)<{ w?: string; h?: string }>`
  width: 100%;
  font-size: 1.2em;
  font-weight: 300;
  padding: 0px;
  ${({ w }) =>
    w &&
    `
    width: ${w};
  `}
  ${({ h }) => `
    height: ${h};
  `}
`
export const NavDiv = styled.div`

`
export const NavButton = styled(MGGButton)`
  width: 60px;
  height: 4vh;
  border-radius: 0!important;
  background-color: transparent;
  // border: 1px solid ${COLORS.BORDER};
`
