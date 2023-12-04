import { useState, useEffect } from 'react';
import axios from 'axios';

const useSubgraphQuery = (query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = process.env.REACT_APP_SUBGRAPH_URL ? process.env.REACT_APP_SUBGRAPH_URL : 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange';
        const response = await axios.post(url, { query });
        
        for (let x = 0 ; x < response.data.data.listings.length ; x++) {
          const details = await axios.get(`${process.env.REACT_APP_MSW_API}/api/warrior/${response.data.data.listings[x].tokenId}`);
          response.data.data.listings[x] = { ...response.data.data.listings[x], ...details.data };
        }
        
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
};

export default useSubgraphQuery;