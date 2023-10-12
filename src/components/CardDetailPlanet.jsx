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

      <div className="flex justify-center">
        <div className="bg-[url('./src/assets/card-support.png')] bg-no-repeat">
          <div className="group h-80 w-full">
            <div className="relative h-[236] w-[682px] top-[33px] left-[64px] origin-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute z-10 bg-no-repeat h-full w-full">
                <img
                  src="./src/assets/card-front.png"
                  alt=""
                  className="absolute z-0"
                />
                <div className="z-20 flex justify-center items-center mt-3 space-x-8 group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <img
                    src={image}
                    alt="character"
                    className="h-40 w-40 z-10 object-cover rounded-full"
                  />
                  <div className="flex flex-col items-center z-10 leading-10 text-font-color font-test font-medium text-xl">
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
              <div className="absolute z-10 h-full w-full top-0 right-0 bg-primary/20 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <p className="">planet</p>
                  <p className="">vehicle</p>
                  <p className="">starship</p>
                  <button className="">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
