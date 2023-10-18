import React, { useState } from 'react'
import styled from 'styled-components'
import useMarketplaceV2Data from 'hooks/useMarketplaceV2Data'
import useMarketplaceV2 from 'hooks/useMarketplaceV2'
import Page from './index'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import PageLoader from '../Loader'
import '../../../styles/Marketplace.css'
import BuyModal from '../../Modals/Buy-token'

export const StyledViews = styled.div`
  min-height: 100vh;
`

const withLoading = (WrappedComponent) => {
  return (props) => {
    const { data } = props
    const [isLoading, setIsLoading] = useState<boolean>(true)
    React.useEffect(() => {
      if (!data) {
        setIsLoading(true)
      }
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 3000)
      return () => clearTimeout(timer)
    }, [data])
    if (isLoading) {
      return <PageLoader />
    }
    return <WrappedComponent {...props} />
  }
}
const VLayout: React.FC = (props) => {
  const {
    controllers: { modal },
  } = useMarketplaceV2()
  const { children } = props
  return (
    <Page>
      <Navbar />
      {children}
      {modal.openModal['buy-token'] && <BuyModal />}
      <Footer />
    </Page>
  )
}
const WrappedComponent = withLoading(VLayout)
const ViewsLayout: React.FC = ({ children }) => {
  const { data } = useMarketplaceV2Data()
  return <WrappedComponent data={data}> {children} </WrappedComponent>
}

export default ViewsLayout
