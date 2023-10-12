import { useEffect, useState } from 'react';
import getInfo from '../fetch/getInfo';
import ShipContent from '../ShipContent';
import PaginationButton from '../PaginationButton';

export default function Ships() {
  const [ships, setShips] = useState([]);
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState([]);

  const numberPage = [];

  useEffect(() => {
    const controller = new AbortController();
    let url = `https://swapi.dev/api/starships/?page=${page}`;

    getInfo(url, controller)
      .then((data) => {
        setShips((prev) => {
          return [...prev, data.results];
        });
        for (let j = 1; j <= data.results.length; j++) {
          setImage((prev) => {
            let data = `https://starwars-visualguide.com/assets/img/starships/${
              j * page
            }.jpg`;
            return [...prev, data];
          });
        }
        setPages(data.count / 10);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    return () => {
      controller.abort();
    };
  }, [page]);

  useEffect(() => {}, []);

  for (let k = 1; k <= Math.ceil(pages); k++) {
    numberPage.push(k);
  }
  console.log({ numberPage });
  console.log({ pages });

  return (
    <>
      <div className="px-32 pt-36">
        <div className="flex justify-end pb-5">
          <div className="flex gap-2">
            {numberPage.map((pageNumber, index) => (
              <PaginationButton
                key={index}
                onClick={() => {
                  setActivePage(pageNumber);
                  setPage(pageNumber);
                }}
                isActive={activePage === pageNumber}
              />
            ))}
          </div>
        </div>

        {console.log({ image })}
        {ships.length === page - 1 ? (
          ''
        ) : (
          <ShipContent
            ships={ships[page - 1]}
            image={image}
            numberPage={page}
          />
        )}
      </div>
    </>
  );
}
