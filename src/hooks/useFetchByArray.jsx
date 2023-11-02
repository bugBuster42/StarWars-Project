import { useEffect, useState } from 'react';
import getInfo from '../components/fetch/getInfo';

export default function useFetchByArray(arrayUrl) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const promises = arrayUrl.map((url) => getInfo(url, controller));
    const fetchData = async () => {
      try {
        const responses = await Promise.all(promises);
        setData(responses);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [arrayUrl]);

  return data;
}
