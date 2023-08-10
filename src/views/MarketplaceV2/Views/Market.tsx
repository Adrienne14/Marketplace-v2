import React from 'react'

import ViewsLayout, { StyledViews } from '../components/Foundation/layout/Views'
import Sidebar from '../components/Foundation/Sidebar'

const Market = () => {
  return (
    <ViewsLayout>
      <StyledViews>
        <Sidebar>
          <div>Market</div>
        </Sidebar>
      </StyledViews>
    </ViewsLayout>
  )
}

export default Market
