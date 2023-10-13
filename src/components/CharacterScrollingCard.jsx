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
      <div className="flex justify-center h-[44vh] cards-perspective">
        <div
          ref={scrollRef}
          className="mt-[-80px] flex flex-wrap justify-center gap-2 w-2/4 mx-auto overflow-y-scroll hide-scrollbar"
        >
          <div className="h-[390px] w-full"></div>
          {tempCharacters.map((character, index) => (
            <SmallCard
              size="scrollingCardSize"
              key={index}
              image={character.image}
              name={character.name}
              role={character.role}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center cards-perspective">
        <img
          className="mt-20 animate-bounce w-10 h-10 "
          src={fleche}
          alt="Flèche directionnelle"
        />
      </div>
    </div>
  );
}
