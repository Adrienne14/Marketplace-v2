import React, { useState, useEffect, useContext } from 'react'
import { MarketplaceV2DataContext } from 'contexts/MarketplaceDataContext'
import { CardType } from 'contexts/index.d'

const useMarketplaceV2Data = () => {
  return useContext(MarketplaceV2DataContext)
}
export default useMarketplaceV2Data

export const useMarketplaceV2FetchData = () => {
  const {
    data: { nfts, classes },
  } = useMarketplaceV2Data()

  return {
    data: nfts,
    classes,
  }
}

export const useMarketplaceV2FetchItem = (q) => {
  const { data } = useMarketplaceV2FetchData()
  const [selected, setSelected] = useState<CardType>()

  useEffect(() => {
    const handleFetchItem = (query) => {
      return data.find((d) => d.name === query)
    }
    const res = handleFetchItem(q)
    setSelected(res)
  }, [q, data])

  return {
    selected,
  }
}
