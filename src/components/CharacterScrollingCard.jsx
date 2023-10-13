import { useEffect, useRef } from 'react';
import SmallCard from './SmallCard';
import fleche from './icons/fleche-bas.png';

export default function CharacterScrollingCard() {
  const scrollRef = useRef(null);
  const tempCharacters = Array.from({ length: 82 }, (_, index) => ({
    image: `image ${index + 1}.jpg`,
    name: `Name ${index + 1}`,
    role: `Role ${index + 1}`,
  }));

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 345;
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="cards-perspective flex h-[44vh] justify-center">
        <div
          ref={scrollRef}
          className="hide-scrollbar mx-auto mt-[-80px] flex w-2/4 flex-wrap justify-center gap-2 overflow-y-scroll"
        >
          <div className="h-[390px] w-full"></div>
          {tempCharacters.map((character, index) => (
            <div
              className="hover:rotate-x-[50deg] transform transition-transform duration-300 hover:-translate-y-4 "
              key={index}
            >
              <SmallCard
                size="scrollingCardSize"
                image={character.image}
                name={character.name}
                role={character.role}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="cards-perspective flex justify-center">
        <img
          className="mt-20 h-10 w-10 animate-bounce "
          src={fleche}
          alt="Flèche directionnelle"
        />
      </div>
    </div>
  );
}
