import React from 'react'
import { Flex } from '@metagg/mgg-uikit'
import { OptionBox } from '../Foundation/Box'
import SvgIcon from '../Foundation/SvgIcon'
import { TextWrapper } from '../Foundation/Text'

const Option = () => {
  return (
    <OptionBox>
      {/* <SvgIcon /> */}
      <TextWrapper p="1em">Archer</TextWrapper>
    </OptionBox>
  )
}

export default Option
