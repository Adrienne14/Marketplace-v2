import React from 'react'
import { PageContainer, StyledSection } from './components/Foundation/layout'
import * as SECTIONS from './components/Sections'

import ViewsLayout from './components/Foundation/layout/Views'
import MarketplaceProviders from './Providers'
// import Authentication from './components/Authentication'

const sections = SECTIONS as unknown as { [key: string]: React.FC }

const MarketplaceV2: React.FC = () => {
  return (
    <ViewsLayout>
      {Object.keys(sections).map((key) => {
        const Sec = sections[key] as React.FC
        return (
          <StyledSection key={key}>
            <PageContainer>
              <Sec />
            </PageContainer>
          </StyledSection>
        )
      })}
    </ViewsLayout>
  )
}

export default MarketplaceV2
