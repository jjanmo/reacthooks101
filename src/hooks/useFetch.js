import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    try {
      const result = await axios(url);
      setData(result.data);
    } catch (e) {
      console.log(e);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return data;
};

export default useFetch;
