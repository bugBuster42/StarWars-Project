import { useState, useEffect } from 'react';
import getInfo from './fetch/getInfo';
import SmallCard from './SmallCard';
import Loading from './Loading';
import CardDetailCharacter from './CardDetailCharacter';

export default function CharacterScrollingCard() {
  const [charactersData, setCharactersData] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  useEffect(() => {
    const controller = new AbortController();
    let loadedCount = 0;

    const fetchCharacters = async (url) => {
      try {
        const data = await getInfo(url, controller);

        const newCharactersData = data.results.map((character) => {
          const id = parseInt(
            character.url.split('people/')[1].replace('/', ''),
          );
          const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

          if (id <= 10) setLoading(false);
          return {
            ...character,
            image: imageUrl,
          };
        });
        setCharactersData((prev) => [...prev, ...newCharactersData]);

        loadedCount += newCharactersData.length;

        if (data.next && loadedCount < 80) {
          fetchCharacters(data.next);
        } else {
          const randomCharacter =
            newCharactersData[
              Math.floor(Math.random() * newCharactersData.length)
            ];
          setSelectedCharacter(randomCharacter);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCharacters('https://swapi.dev/api/people/');

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="star-wars-opening-crawl-effect flex h-[40vh] justify-center">
        <div className="hide-scrollbar mx-auto mt-[-980px] flex w-2/3 flex-wrap justify-center gap-3 overflow-y-scroll scale-90">
          <div className="h-[990px] w-full"></div>
          {charactersData.map((character, index) => {
            if (!character.name || !character.image) {
              return null;
            }
            return (
              <div
                key={index}
                className="cursor-pointer transition-transform duration-500 ease-in-out transform hover:-translate-y-10 hover:scale-110 "
                onClick={() => handleCharacterSelect(character)}
              >
                <SmallCard
                  image={character.image}
                  name={character.name}
                  role={`Size : ${character.height} cm`}
                  fallback="/transport-placeholder.png"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {selectedCharacter && (
          <CardDetailCharacter character={selectedCharacter} />
        )}
      </div>
    </>
  );
}
