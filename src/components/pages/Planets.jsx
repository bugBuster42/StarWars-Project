import { useEffect, useState } from 'react';
import CarouselPlanets from '../CarouselPlanets';
import getInfo from '../fetch/getInfo';
import PaginationButton from '../PaginationButton';
import Loading from '../Loading';
import Star from '../Star';

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [countPages, setCountPages] = useState(0);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const url = `https://swapi.dev/api/planets/?page=${page}`;
    setLoading(true);
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
      <div>
        <div className="flex justify-center">
          <div className="absolute z-20 ">
            <div className="flex gap-2">
              {new Array(countPages).fill().map((p, i) => (
                <PaginationButton
                  key={i}
                  onClick={() => {
                    setPage(i + 1);
                    setIsHidden(true);
                  }}
                  isActive={page === i + 1}
                />
              ))}
            </div>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <CarouselPlanets
            planets={planets}
            isHidden={isHidden}
            setIsHidden={setIsHidden}
          />
        )}
      </div>
      <Star width="32" bottom="20" left="96" />
      <Star width="12" top="44" left="44" />
      <Star width="28" bottom="80" right="[42rem]" />
      <Star width="24" top="20" right="96" />
    </>
  );
}
