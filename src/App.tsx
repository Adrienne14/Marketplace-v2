import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import MarketplaceV2 from "views/MarketplaceV2";
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Router } from 'react-router-dom';
import { AuthContextProvider } from 'contexts/AuthContext'
import { MarketplaceV2Provider } from 'contexts/MarketplaceContext'
import { MarketplaceV2DataProvider } from 'contexts/MarketplaceDataContext'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import ModalProvider from './views/MarketplaceV2/Providers/ModalProvider'
import store from './state'

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <HashRouter>
          <HelmetProvider>
           <ThemeContextProvider>
            <AuthContextProvider>
                <MarketplaceV2Provider>
                  <MarketplaceV2DataProvider>
                    <MarketplaceV2 />
                  </MarketplaceV2DataProvider>
                </MarketplaceV2Provider>
              </AuthContextProvider>
           </ThemeContextProvider>
          </HelmetProvider>
        </HashRouter>
      </Provider>
    </>
  );
}
