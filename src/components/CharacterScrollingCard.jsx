import { useEffect, useState, useRef } from 'react';
import SmallCard from './SmallCard';
import getInfo from './fetch/getInfo';

export default function CharacterScrollingCard() {
  const [characters, setCharacters] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 345;
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const numberOfCharacters = 82;

    Array.from({ length: numberOfCharacters }, (_, index) => {
      const id = index + 1;
      const url = `https://swapi.dev/api/people/${id}/`;
      getInfo(url, controller)
        .then((result) => {
          setCharacters((prevCharacters) => [...prevCharacters, result]);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="cards-perspective flex h-[44vh] justify-center">
      <div
        ref={scrollRef}
        className="hide-scrollbar mx-auto mt-[-80px] flex w-2/4 flex-wrap justify-center gap-2 overflow-y-scroll"
      >
        <div className="h-[390px] w-full"></div>
        {characters.map((character, index) => {
          const id = character?.url ? character.url.split('/')[5] : null;
          const imageUrl = id
            ? `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
            : 'path/to/your/placeholder/image.jpg';
          const name = character?.name;
          return (
            <div key={index}>
              <SmallCard
                size="scrollingCardSize"
                image={imageUrl}
                name={name}
                role="Character"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
