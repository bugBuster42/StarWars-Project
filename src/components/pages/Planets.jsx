import { useEffect, useState } from 'react';
import CarouselPlanets from '../CarouselPlanets';
import getInfo from '../fetch/getInfo';
import PaginationButton from '../PaginationButton';
import Loading from '../Loading';

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [countPages, setCountPages] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const url = `https://swapi.dev/api/planets/?page=${page}`;
    getInfo(url, controller)
      .then((data) => {
        setPlanets(data.results);
        setCountPages(data.count / 10);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
    return () => {
      controller.abort();
    };
  }, [page]);
  return (
    <>
      <div className="flex justify-center">
        <div className="absolute z-20 ">
          <div className="flex gap-2">
            {new Array(countPages).fill().map((p, i) => (
              <PaginationButton
                key={i}
                onClick={() => {
                  setPage(i + 1);
                }}
                isActive={page === i + 1}
              />
            ))}
          </div>
        </div>
      </div>
      {loading ? <Loading /> : <CarouselPlanets planets={planets} />}
    </>
  );
}
