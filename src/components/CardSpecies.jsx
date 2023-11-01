import Smallcard from './SmallCard';
import CardDetailSpecie from './CardDetailSpecie';
import { useState } from 'react';

export default function CardSpecies({ species = [] }) {
  const [cardDetail, setCardDetail] = useState(0);
  const [imgCard, setImgCard] = useState('');
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <div className="mb-32 mt-10 flex flex-wrap justify-center gap-5 align-middle">
        {species.map((specie, selectedSpecie) => (
          <div
            className={
              'card-species w-[286px] duration-300 scale-100 hover:ml-10 hover:mr-10 hover:scale-125 [&:has(+.card-species:hover)]:scale-110 [&:hover+.card-species]:scale-110'
            }
            key={selectedSpecie}
            onClick={() => {
              setCardDetail(selectedSpecie);
              setImgCard(specie.url.split('/')[5]);
              setIsHidden(false);
            }}
          >
            <Smallcard
              image={`https://starwars-visualguide.com/assets/img/species/${
                specie.url.split('/')[5]
              }.jpg`}
              name={specie.name}
              role={specie.classification}
              fallback="/transport-placeholder.png"
            />
          </div>
        ))}
      </div>
      <div className={isHidden ? 'hidden' : ''}>
        <CardDetailSpecie specie={species[cardDetail]} img={imgCard} />
      </div>
    </>
  );
}
