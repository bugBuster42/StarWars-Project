import { useEffect, useState } from 'react';
import getInfo from './getInfo';

export default function ResidentsPlanet({ residents }) {
  const [listResidents, setListResidents] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const fetchResidentData = async () => {
      const promises = residents.map((url) => getInfo(url, controller));
      try {
        const responses = await Promise.all(promises);
        const names = responses.map((res) => res.name);
        setListResidents(names);
      } catch (err) {
        console.error(err);
      }
    };

    fetchResidentData();
    return () => {
      controller.abort();
    };
  }, [residents]);

  return (
    <>
      <h1 className="font-medium-5 my-4 text-center font-test text-xl text-font-color">
        Resident de la planet
      </h1>
      <div className="flex justify-center">
        <ul className="font-medium-5 columns-3 font-test text-xl leading-10 text-font-color">
          {listResidents.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
