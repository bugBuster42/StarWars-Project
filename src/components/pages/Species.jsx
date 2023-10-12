import { useState } from 'react';
import CardSpecies from '../CardSpecies';
import Smallcard from '../SmallCard';

export default function Species() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const cards = [1, 2, 3, 4, 5];

  const cardsIndex = cards.map((x, i) => (
    <div
      key={i}
      onMouseEnter={() => setHoverIndex(i)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      <CardSpecies
        addClass={
          i + 1 === hoverIndex || i - 1 === hoverIndex ? 'scale-110' : ''
        }
      >
        <Smallcard />
      </CardSpecies>
    </div>
  ));

  return <div className="mt-10 flex justify-center gap-5">{cardsIndex}</div>;
}
