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
        setPages(data.count / 10);
        for (let j = 0; j <= data.results.length; j++) {
          let number1 = data.results[j].url[32];
          let number2 = parseInt(data.results[j].url[33], 10);
          let number = number1 + (Number.isInteger(number2) ? number2 : '');
          setImage((prev) => {
            let data = `https://starwars-visualguide.com/assets/img/starships/${number}.jpg`;
            return [...prev, data];
          });
        }
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

  console.log({ image });
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
