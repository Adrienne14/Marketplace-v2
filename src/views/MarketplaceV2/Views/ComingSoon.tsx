import React from 'react'
import { Flex } from '@metagg/mgg-uikit'
import Main from './Main'
import { H1 } from '../components/Foundation/Text'
import Logo from '../components/Foundation/Logo'
import { marketplaceURL } from '../constants/config'

const ComingSoon = () => {
  return (
    <Main>
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Flex alignItems="center" justifyContent="center" flexDirection="column">
          <Logo size={200} url={marketplaceURL} />
          <H1 fsize="5em">Coming Soon</H1>
        </Flex>
      </div>
    </Main>
  )
}

export default ComingSoon
