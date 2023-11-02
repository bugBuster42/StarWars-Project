import { useEffect, useState } from 'react';
import getInfo from '../fetch/getInfo';
import TransportContent from './TransportContent';
import PaginationButton from './PaginationButton';
import Loading from './Loading';

export default function Transport({ object }) {
  const [transports, setTransports] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setActivePage(1);
  }, [object]);

  useEffect(() => {
    const controller = new AbortController();
    const url = `https://swapi.dev/api/${object}/?page=${
      activePage % 2 !== 0 ? (activePage + 1) / 2 : activePage / 2
    }`;
    setLoading(true);
    getInfo(url, controller)
      .then((data) => {
        if (activePage % 2 !== 0) {
          setTransports((prev) => {
            prev[activePage - 1] = data.results.slice(0, 5);
            return prev;
          });
        } else {
          setTransports((prev) => {
            prev[activePage - 1] = data.results.slice(5, 10);
            return prev;
          });
        }
        setLoading(false);
        setPages(Math.ceil(data.count / 10) * 2);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    return () => {
      controller.abort();
    };
  }, [activePage, object]);

  return (
    <>
      <div className="flex justify-end pb-5">
        <div className="flex gap-2">
          {new Array(pages).fill().map((a, index) => (
            <PaginationButton
              key={index}
              onClick={() => {
                setActivePage(index + 1);
              }}
              isActive={activePage === index + 1}
            />
          ))}
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <TransportContent
          transports={transports[activePage - 1]}
          object={object}
          fallback="/transport-placeholder.png"
        />
      )}
    </>
  );
}
