import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import MarketplaceV2 from "views/MarketplaceV2";
import NFTMarket from "views/MarketplaceV2/Views/Market/Market"
import UserPage from "views/MarketplaceV2/Views/User"
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { AuthContextProvider } from 'contexts/AuthContext'
import { MarketplaceV2Provider } from 'contexts/MarketplaceContext'
import { MarketplaceV2DataProvider } from 'contexts/MarketplaceDataContext'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import ModalProvider from './views/MarketplaceV2/Providers/ModalProvider'
import store from './state'
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react"

export default function Home() {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId={process.env.REACT_APP_THIRDWEB_CLIENT_ID}
      supportedWallets={[metamaskWallet()]}
    >
      <Provider store={store}>
        <HashRouter>
          <HelmetProvider>
            <ThemeContextProvider>
              <AuthContextProvider>
                <MarketplaceV2Provider>
                  <MarketplaceV2DataProvider>
                    <Switch>
                      <Route path="/" exact component={MarketplaceV2} />
                      <Route path="/profile" exact component={UserPage} />
                      <Route path="/marketplace" exact component={NFTMarket} />
                    </Switch>
                  </MarketplaceV2DataProvider>
                </MarketplaceV2Provider>
              </AuthContextProvider>
            </ThemeContextProvider>
          </HelmetProvider>
        </HashRouter>
      </Provider>
    </ThirdwebProvider>
  );
}
