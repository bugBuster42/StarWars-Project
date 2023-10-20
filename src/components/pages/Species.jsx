import { useEffect, useState } from 'react';
import getInfo from '../fetch/getInfo';
import Loading from '../Loading';
import PaginationButton from '../PaginationButton';
import CardSpecies from '../CardSpecies';

export default function Species() {
  const [species, setSpecies] = useState([]);
  const [activeButton, setActiveButton] = useState(0);
  const [apiPageCount, setApiPageCount] = useState(1);
  const [loading, setLoading] = useState(true);

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
      <div className="absolute top-0 ml-72 flex justify-center">
        {loading ? <Loading mt={2} /> : null}
      </div>
      <div className="px-32 pt-36">
        <div className="flex justify-end pb-5">
          <div className="flex gap-2">
            {new Array(apiPageCount).fill().map((a, index) => (
              <PaginationButton
                key={index}
                onClick={() => setActiveButton(index)}
                isActive={activeButton === index}
              />
            ))}
          </div>
        </div>
        {loading ? null : <CardSpecies species={species} />}
      </div>
    </>
  );
}
