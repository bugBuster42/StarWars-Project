import { useEffect, useState } from 'react';
import getInfo from '../../fetch/getInfo';
import Loading from '../Loading';
import PaginationButton from '../PaginationButton';
import CardSpecies from '../CardSpecies';

export default function Species() {
  const [species, setSpecies] = useState([]);
  const [activeButton, setActiveButton] = useState(0);
  const [apiPageCount, setApiPageCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const apiPage = Math.floor(activeButton / 2) + 1;
        const startSlice = activeButton % 2 === 0 ? 0 : 5;
        const endSlice = startSlice + 5;
        const url = `https://swapi.dev/api/species/?page=${apiPage}`;
        setLoading(true);
        const data = await getInfo(url, controller);
        setApiPageCount(Math.ceil(data.count / 5));
        setSpecies(data.results.slice(startSlice, endSlice));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [activeButton]);

  return (
    <>
      <div className="absolute top-[18px] ml-72 flex justify-center">
        {loading ? <Loading /> : null}
      </div>
      <div>
        <img
          className={`fixed right-0 mr-24 w-11 animate-pulse`}
          src="/blue-star.png"
        />
        <img
          className={`fixed left-0 ml-20 mt-8 w-10 animate-pulse`}
          src="/blue-star.png"
        />
        <img
          className={`fixed right-0 top-0 mr-[960px] mt-12 w-7 animate-pulse`}
          src="/blue-star.png"
        />
        <img
          className={`fixed bottom-0 left-0 mb-20 ml-96 w-9 animate-pulse`}
          src="/blue-star.png"
        />
      </div>
      <div className="pt-1">
        <div className="relative z-20 flex justify-center pb-5">
          <div className="flex gap-2">
            {new Array(apiPageCount).fill().map((a, index) => (
              <PaginationButton
                key={index}
                onClick={() => {
                  setActiveButton(index);
                  setIsHidden(true);
                }}
                isActive={activeButton === index}
              />
            ))}
          </div>
        </div>

        {loading ? null : (
          <CardSpecies
            isHidden={isHidden}
            setIsHidden={setIsHidden}
            species={species}
          />
        )}
      </div>
    </>
  );
}
