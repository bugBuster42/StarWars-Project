import { useEffect, useState } from 'react';
import CardSpecies from '../CardSpecies';
import getInfo from '../fetch/getInfo';
import PaginationButton from '../PaginationButton';

export default function Species() {
  const [species, setSpecies] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const url = `https://swapi.dev/api/species/?page=${activePage}`;

    setLoading(true);
    getInfo(url, controller)
      .then((data) => {
        setSpecies((prev) => {
          prev[activePage - 1] = data.results.slice(0, 5);
          return prev;
        });
        setLoading(false);
        if (pages === 1) {
          setPages(Math.ceil(data.count / 5));
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
        {loading ? null : <CardSpecies species={species[activePage - 1]} />}
      </div>
    </>
  );
}
