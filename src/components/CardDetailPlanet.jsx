import ResidentsPlanet from './fetch/ResidentsPlanet';

export default function CardDetailPlanet({ planet }) {
  console.log(planet);
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    population,
    surface_water,
    residents,
  } = planet;
  return (
    <>
      <div className="mr-14 mt-96 flex justify-center">
        <div className="bg-[url('./src/assets/card-support.png')] bg-no-repeat">
          <div className="group h-80 w-full">
            <div className="relative left-[64px] top-[33px] h-[236] w-[682px] origin-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute z-10 h-full w-full bg-no-repeat ">
                <img
                  src="./src/assets/card-front.png"
                  alt=""
                  className="absolute z-0"
                />
                <div className="z-20 mt-3 flex items-center justify-center space-x-8 [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)]">
                  <img
                    src="../../public/placeholder-planet.png"
                    alt="planet"
                    className="z-10 h-40 w-40 rounded-full object-cover"
                  />
                  <div className="z-10 flex flex-col items-center font-test text-xl font-medium leading-10 text-font-color">
                    <p className="uppercase">{name}</p>
                    <div className="flex flex-row space-x-4">
                      <div className="flex flex-col">
                        <p>
                          rotation{' '}
                          <span className="uppercase">{rotation_period}</span>
                        </p>
                        <p>
                          orbital{' '}
                          <span className="uppercase">{orbital_period}</span>
                        </p>
                        <p>
                          diameter <span className="uppercase">{diameter}</span>
                        </p>
                        <p>
                          population{' '}
                          <span className="uppercase">{population}</span>
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
                          surface water{' '}
                          <span className="uppercase">{surface_water}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 z-10 h-full w-full bg-primary/20 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <ResidentsPlanet residents={residents} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
