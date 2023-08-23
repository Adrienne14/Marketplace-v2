import React from 'react'
import { ModalProvider } from '@metagg/mgg-uikit'
import { Web3ReactProvider } from '@web3-react/core'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { MoralisProvider } from 'react-moralis'
import { getLibrary } from 'utils/web3React'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { LanguageProvider } from 'contexts/Localization'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import { ToastsProvider } from 'contexts/ToastsContext'
import store from 'state'
import { AuthContextProvider } from 'contexts/AuthContext'
import { MarketplaceV2Provider } from 'contexts/MarketplaceContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MarketplaceV2Providers from 'views/MarketplaceV2/Providers'

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <MoralisProvider
          appId={process.env.REACT_APP_MORALIS_APP_ID}
          serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}
        >
          <ToastsProvider>
            <HelmetProvider>
              <ThemeContextProvider>
                <LanguageProvider>
                  <RefreshContextProvider>
                    <MarketplaceV2Providers>
                      <ModalProvider>{children}</ModalProvider>
                    </MarketplaceV2Providers>
                  </RefreshContextProvider>
                </LanguageProvider>
              </ThemeContextProvider>
            </HelmetProvider>
          </ToastsProvider>
          <ToastContainer />
        </MoralisProvider>
      </Provider>
    </Web3ReactProvider>
  )
}

export default Providers
