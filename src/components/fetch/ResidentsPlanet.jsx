import { useEffect, useState } from 'react';
import getInfo from './getInfo';

export default function ResidentsPlanet({ residents }) {
  const [listResidents, setListResidents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newListResidents = [];
      for (let i = 0; i < residents.length; i++) {
        const controller = new AbortController();
        const url = residents[i];
        try {
          const data = await getInfo(url, controller);
          newListResidents.push(data.name);
        } catch (err) {
          console.error('Error fetching data:', err);
        } finally {
          controller.abort();
        }
      }
      setListResidents(newListResidents);
    };

    fetchData();
  }, [residents]);

  console.log('list residents', listResidents);
  return (
    <>
      <h1 className="font-medium-5 my-4 text-center font-test text-xl text-font-color">
        Resident de la planet
      </h1>
      <div className="flex justify-center">
        <ul className="font-medium-5 columns-3 font-test text-xl leading-10 text-font-color">
          {listResidents.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
