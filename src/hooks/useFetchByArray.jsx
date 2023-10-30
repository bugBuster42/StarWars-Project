import { useEffect, useState } from 'react';
import getInfo from '../components/fetch/getInfo';

export default function useGetFetchByArray(arrayUrl) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const promises = arrayUrl.map((url) => getInfo(url, controller));
    const fetchData = async () => {
      try {
        const responses = await Promise.all(promises);
        setData(responses);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [arrayUrl]);

  return data;
}
