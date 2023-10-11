export default function CardDetailCharacter({ character }) {
  const {
    name,
    gender,
    species,
    homeworld,
    year,
    mass,
    height,
    hair,
    skin,
    eye,
    image,
  } = character;
  return (
    <>
      <h1>Card détail character</h1>
      {/* <div className="bg-[url('./src/assets/fond-card-detail.png')] bg-no-repeat bg-center h-80 w-auto flex justify-center items-center space-x-8">
        <img src={image} alt="character" className="h-52 w-40 object-cover" />
        <div className="flex flex-col items-center leading-10 text-font-color font-test font-medium text-2xl">
          <p className="uppercase">{name}</p>
          <div className="flex flex-row space-x-8">
            <div className="flex flex-col">
              <p>
                gender <span className="uppercase">{gender}</span>
              </p>
              <p>
                homeworld <span className="uppercase">{homeworld}</span>
              </p>
              <p>
                mass <span className="uppercase">{mass}</span>
              </p>
            </div>
            <div className="flex flex-col text-right">
              <p>
                species <span className="uppercase">{species}</span>
              </p>
              <p>
                year <span className="uppercase">{year}</span>
              </p>
              <p>
                height <span className="uppercase">{height}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-12">
            <p>
              hair <span className="uppercase">{hair}</span>
            </p>
            <p>
              skin <span className="uppercase">{skin}</span>
            </p>
            <p>
              eye <span className="uppercase">{eye}</span>
            </p>
          </div>
        </div>
      </div> */}

      <div className="bg-[url('./src/assets/card-support.png')] bg-no-repeat bg-center flex justify-center">
        <div className="group h-80 w-80">
          <div className="relative h-[235] w-[682px] origin-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute z-10 top-8 bg-no-repeat bg-center h-full w-full ">
              <img
                src="./src/assets/card-front.png"
                alt=""
                className="absolute z-0 "
              />
              <div className="z-10">
                <img
                  src={image}
                  alt="character"
                  className="h-52 w-40 z-10 object-cover"
                />
                <div className="flex flex-col items-center leading-10 text-font-color font-test font-medium text-2xl">
                  <p className="uppercase">{name}</p>
                  <div className="flex flex-row space-x-8">
                    <div className="flex flex-col">
                      <p>
                        gender <span className="uppercase">{gender}</span>
                      </p>
                      <p>
                        homeworld <span className="uppercase">{homeworld}</span>
                      </p>
                      <p>
                        mass <span className="uppercase">{mass}</span>
                      </p>
                    </div>
                    <div className="flex flex-col text-right">
                      <p>
                        species <span className="uppercase">{species}</span>
                      </p>
                      <p>
                        year <span className="uppercase">{year}</span>
                      </p>
                      <p>
                        height <span className="uppercase">{height}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-12">
                    <p>
                      hair <span className="uppercase">{hair}</span>
                    </p>
                    <p>
                      skin <span className="uppercase">{skin}</span>
                    </p>
                    <p>
                      eye <span className="uppercase">{eye}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute z-10 h-full w-full top-0 right-0 text-center bg-primary/20 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="">aaaaaaaa</h1>
                <p className="">aaaaaaaa</p>
                <p className="">aaaaaaaa</p>
                <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
