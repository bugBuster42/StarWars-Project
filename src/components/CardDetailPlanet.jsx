export default function CardDetailPlanet({ planet }) {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
    image,
  } = planet;
  return (
    <>
      <h1>Card détail planet</h1>
      <div className="bg-[url('./src/assets/fond-card-detail.png')] bg-no-repeat bg-center h-80 w-auto flex justify-center items-center space-x-8">
        <img
          src={image}
          alt="planet"
          className="h-40 w-40 object-cover rounded-full "
        />
        <div className="flex flex-col items-center leading-10 text-font-color font-test font-medium text-xl">
          <p className="uppercase">{name}</p>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-col">
              <p>
                rotation <span className="uppercase">{rotation_period}</span>
              </p>
              <p>
                orbital <span className="uppercase">{orbital_period}</span>
              </p>
              <p>
                diameter <span className="uppercase">{diameter}</span>
              </p>
              <p>
                population <span className="uppercase">{population}</span>
              </p>
            </div>
            <div className="flex flex-col text-right">
              <p>
                climate <span className="uppercase">{climate}</span>
              </p>
              <p>
                terrain <span className="uppercase">{terrain}</span>
              </p>
              <p>
                gravity <span className="uppercase">{gravity}</span>
              </p>
              <p>
                surface water <span className="uppercase">{surface_water}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
