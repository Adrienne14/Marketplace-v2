import React, { useState } from 'react'
import styled from 'styled-components'
import useMarketplaceV2 from 'hooks/useMarketplaceV2'
import Page from './index'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import PageLoader from '../Loader'
import '../../../styles/Marketplace.css'

export const StyledViews = styled.div`
  height: 100vh;
`

const ViewsLayout: React.FC = ({ children }) => {
  const [loaded, setLoaded] = useState<boolean>(false)
  const { badges, sprites } = useMarketplaceV2()

  React.useEffect(() => {
    if (badges.length !== 0 && sprites.length !== 0) {
      setTimeout(() => setLoaded(true), 3000)
    }
  }, [badges, sprites])

  return loaded ? (
    <Page>
      <Navbar />
      {children}
      <Footer />
    </Page>
  ) : (
    <PageLoader />
  )
}

export default ViewsLayout
