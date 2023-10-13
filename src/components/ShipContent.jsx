import Smallcard from './SmallCard';

export default function ShipContent({ ships = [] }) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 align-middle">
        {ships.map((ship, index) => (
          <div key={index}>
            <Smallcard
              image={`https://starwars-visualguide.com/assets/img/starships/${
                ship.url.split('/')[5]
              }.jpg`}
              name={ship.name}
              role={ship.model}
              fallBack="../shipPlaceHolder.jpg"
            />
          </div>
        ))}
      </div>
    </>
  );
}
