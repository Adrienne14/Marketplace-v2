import styled from "styled-components";
import { Button } from '@metagg/mgg-uikit'
import { MiniBox } from "../Box";

export const StyledButton = styled(Button)`
  color: ${({theme}) => (theme.colors.text)};
  font-size: 1em;
  margin: 0 5px; 
  padding: 0;
`

export const StyledMiniBox = styled(MiniBox)`
  height: auto;
  justify-content: flex-start;
  width: 100px;
`