import Smallcard from './SmallCard';

export default function CardSpecies({ species = [] }) {
  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-5 align-middle">
        {species.map((specie, index) => (
          <div
            className={
              'card-species w-[286px] duration-300 scale-100 hover:ml-10 hover:mr-10 hover:scale-125 [&:has(+.card-species:hover)]:scale-110 [&:hover+.card-species]:scale-110'
            }
            key={index}
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
    </>
  );
}
