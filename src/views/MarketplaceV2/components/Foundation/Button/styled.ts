import styled from "styled-components";
import { Button } from '@metagg/mgg-uikit'
import { MiniBox } from "../Box";

export const StyledButton = styled(Button)`
  color: ${({theme}) => (theme.colors.text)};
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