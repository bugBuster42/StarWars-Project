import { useEffect, useState } from 'react';
import getInfo from '../fetch/getInfo';
import ShipContent from '../ShipContent';
import PaginationButton from '../PaginationButton';
import Loading from '../Loading';

export default function Ships() {
  const [ships, setShips] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const url = `https://swapi.dev/api/starships/?page=${activePage}`;

    setLoading(true);
    getInfo(url, controller)
      .then((data) => {
        setShips((prev) => {
          prev[activePage - 1] = data.results;
          return prev;
        });
        setLoading(false);
        if (pages === 1) {
          setPages(Math.ceil(data.count / 10));
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    return () => {
      controller.abort();
    };
  }, [activePage]);

  return (
    <>
      <div className="px-32 pt-36">
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
        {loading ? <Loading /> : <ShipContent ships={ships[activePage - 1]} />}
      </div>
    </>
  );
}
