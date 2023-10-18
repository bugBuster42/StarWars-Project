import { useEffect, useState } from 'react';
import CardSpecies from '../CardSpecies';
import getInfo from '../fetch/getInfo';
import PaginationButton from '../PaginationButton';

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
        setSpecies(data.results.slice(startSlice, endSlice));
        setLoading(false);
        if (apiPageCount === 1) {
          setApiPageCount(Math.ceil(data.count / 5));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [activeButton]);

  const pagination = new Array(apiPageCount)
    .fill()
    .map((a, index) => (
      <PaginationButton
        key={index}
        onClick={() => setActiveButton(index)}
        isActive={activeButton === index}
      />
    ));

  return (
    <>
      <div className="px-32 pt-36">
        <div className="flex justify-end pb-5">
          <div className="flex gap-2">{pagination}</div>
        </div>
        {loading ? null : <CardSpecies species={species} />}
      </div>
    </>
  );
}
