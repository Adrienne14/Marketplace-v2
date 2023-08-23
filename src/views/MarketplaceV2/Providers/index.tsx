import React from 'react'
import { AuthContextProvider } from 'contexts/AuthContext'
import { MarketplaceV2Provider } from 'contexts/MarketplaceContext'
import ModalProvider from './ModalProvider'

const MarketplaceProviders: React.FC = ({ children }) => {
  return (
    <AuthContextProvider>
      <MarketplaceV2Provider>
        {children}
        <ModalProvider />
      </MarketplaceV2Provider>
    </AuthContextProvider>
  )
}

export default MarketplaceProviders
