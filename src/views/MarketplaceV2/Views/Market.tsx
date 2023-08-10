import React from 'react'
import Filters from '../components/Filters'
import ViewsLayout, { StyledViews } from '../components/Foundation/layout/Views'
import Sidebar from '../components/Sidebar'
import UserHighlight from '../components/UserHighlight'

const Market = () => {
  return (
    <ViewsLayout>
      <StyledViews>
        <Sidebar>
          <UserHighlight />
          <Filters />
          <div>Market</div>
        </Sidebar>
      </StyledViews>
    </ViewsLayout>
  )
}

export default Market
