import React from 'react'
import styled from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'
import { COLORS, DEFAULT_BORDERS } from 'views/MarketplaceV2/styles/constants'
import useTheme from 'hooks/useTheme'
import { Button, IconButton } from '@metagg/mgg-uikit'
import { MiniBox } from '../Box'
import { P } from '../Text'
import { Props } from './index.d'
import './index.css'

const Dropdown: React.FC<Props> = ({ filters }) => {
  const { theme } = useTheme()
  const [option, setOption] = React.useState(filters[0])
  const [display, setDisplay] = React.useState<string>('none')

  const handleChange = (event) => {
    setOption(event.target.value as string)
  }

  return (
    <MiniBox className="dropdown" direction="column" align="center" justify="space-between" p="0">
      <DropdownBtn className="dropbtn">
        <P fsize="0.7em">{option} &nbsp;</P>
        <FaChevronDown color={theme.colors.MGG_accent2} className="dropdown-icon" />
      </DropdownBtn>
      <DropdownContent className="dropdown-content">
        {filters.map((filter) => (
          <Option key={filter} value={filter} onClick={handleChange} type="button" className="dropdown-item option">
            {filter}
          </Option>
        ))}
      </DropdownContent>
    </MiniBox>
  )
}

export default Dropdown

const DropdownBtn = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 5px;
  justify-content: space-between;
`

const Option = styled.button`
  background-color: transparent;
  margin: 0;
  padding: 1px;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  font-size: 0.7em;
  text-align: left;
`

const DropdownContent = styled.div`
  padding: 2px;
  border: ${DEFAULT_BORDERS};
  background-color: ${COLORS.MENU};
  flex-direction: column;
`
