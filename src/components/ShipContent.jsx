import Smallcard from './SmallCard';

export default function ShipContent({ ships, image, numberPage }) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 align-middle">
        {ships.map((ship, index) => (
          <div key={index}>
            <Smallcard
              image={image[index * numberPage] ? image[index * numberPage] : ''}
              name={ship.name}
              role={ship.model}
            />
          </div>
        ))}{' '}
      </div>
    </>
  );
}
