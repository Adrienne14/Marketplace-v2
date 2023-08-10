import React from 'react'
import { IconButton } from '@metagg/mgg-uikit'
import { useLocation } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import useTheme from 'hooks/useTheme'
import { P } from '../Foundation/Text'
import './style.css'
import { MiniBox } from '../Foundation/Box'
import { CustomBox, StyledDiv } from './styled'


const UserHighlight = () => {
  const { theme } = useTheme()
  const { pathname } = useLocation()
  const pageMap = pathname
    .split('/')
    .map((item) => (item === 'marketplace' ? 'home' : item))
    .reduce((accumulator, currentValue) => {
      if (currentValue !== '') {
        accumulator.push(currentValue.toUpperCase())
      }
      return accumulator
    }, [])

  const renderPageMap = () => (
    <P style={{cursor: 'default'}}>
      <span style={{ color: theme.colors.textSubtle }}>{pageMap[0]} &gt; </span> <span>{pageMap[1]}</span>
    </P>
  )
  return (
    <StyledDiv>
      {renderPageMap()}
      <div className='user-h-actions'>
        <CustomBox>
          <P>123456789 MGG</P>
        </CustomBox>
        <IconButton variant='text' style={{padding: 0}}>
        <CustomBox>
          <FiLogOut />
        </CustomBox>
        </IconButton>
      </div>
    </StyledDiv>
  )
}

export default UserHighlight
