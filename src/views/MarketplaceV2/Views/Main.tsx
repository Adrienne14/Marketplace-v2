import React from 'react'
import Filters from '../components/Filters'
import ViewsLayout, { StyledViews } from '../components/Foundation/layout/Views'
import Sidebar from '../components/Sidebar'
import UserHighlight from '../components/UserHighlight'

const Main: React.FC = ({children}) => {
  return (
    <ViewsLayout>
      <StyledViews>
        <Sidebar>
          <UserHighlight />
          <Filters />
          {children}
        </Sidebar>
      </StyledViews>
    </ViewsLayout>
  )
}

export default Main
