import React from 'react'
import { IconButton } from '@metagg/mgg-uikit'
import { useLocation } from 'react-router-dom'
import useTheme from 'hooks/useTheme'
import useFirebaseAuth from 'hooks/useFirebaseAuth'
import { P, TextWrapper } from '../Foundation/Text'
import './style.css'
import { MiniBox } from '../Foundation/Box'
import { CustomBox, StyledDiv } from './styled'
import Iconloader from '../Foundation/Iconloader'
import UnlockButton from '../Foundation/UnlockButton'
import Login from '../Foundation/Login'

const UserHighlight = () => {
  const { theme } = useTheme()
  const { user } = useFirebaseAuth()
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
    <TextWrapper>
      <P style={{ cursor: 'default' }}>
        <span style={{ color: theme.colors.textSubtle }}>{pageMap[0]} &gt; </span> <span>{pageMap[1]}</span>
      </P>
    </TextWrapper>
  )
  return (
    <StyledDiv>
      {renderPageMap()}
      <div className="user-h-actions">
        {user ? (
          <>
            <CustomBox>
              <TextWrapper>
                <P fsize="0.8em">123456789 MGG</P>
              </TextWrapper>
            </CustomBox>
            <IconButton variant="text" style={{ padding: 0 }} className="icon-button">
              <CustomBox>
                <TextWrapper className='with-animation-enlarge'>
                  <Iconloader type="fi" name="LogOut" fontSize="0.8em" />
                </TextWrapper>
              </CustomBox>
            </IconButton>
          </>
        ) : (
          <CustomBox>
            <Login />
          </CustomBox>
        )}
      </div>
    </StyledDiv>
  )
}

export default UserHighlight
