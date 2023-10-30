import { useEffect, useState } from 'react';
import getInfo from '../components/fetch/getInfo';

export default function useGetArray(objects) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    for (let i = 0; i < objects.length; i++) {
      const fetchData = async (i) => {
        const arrayUrl = objects[i];
        const promises = arrayUrl.map((url) => getInfo(url, controller));
        try {
          const responses = await Promise.all(promises);
          setData((prev) => {
            prev[i] = responses;
            return prev;
          });
        } catch (err) {
          console.error(err);
        }
      };
      for (let i = 0; i < objects.length; i++) {
        fetchData(i);
      }
      return () => {
        controller.abort();
      };
    }
  }, [objects]);

  return data;
}
