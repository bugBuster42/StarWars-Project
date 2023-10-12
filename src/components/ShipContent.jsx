import Smallcard from './SmallCard';

export default function ShipContent({ ships, image, numberPage }) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 align-middle">
        {ships.map((ship, index) => (
          <div key={index}>
            {console.log(ship)}
            <Smallcard
              image={
                image[index + 10 * (numberPage - 1)]
                  ? image[index + 10 * (numberPage - 1)]
                  : ''
              }
              name={ship.name}
              role={ship.model}
            />
          </div>
        ))}{' '}
      </div>
    </>
  );
}
