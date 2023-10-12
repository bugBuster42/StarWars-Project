export default function CardDetailStarship({ starship }) {
  const {
    name,
    model,
    length,
    crew,
    passengers,
    consumables,
    hyperdrive_rating,
    MGLT,
    image,
  } = starship;
  return (
    <>
      <h1>Card détail starship</h1>
      {/* <div className="bg-[url('./src/assets/fond-card-detail.png')] bg-no-repeat bg-center h-80 w-auto flex justify-center items-center space-x-8">
        <img src={image} alt="character" className="h-52 w-40 object-cover" />
        <div className="flex flex-col items-center leading-10 text-font-color font-test font-medium text-2xl">
          <p className="uppercase">{name}</p>
          <div className="flex flex-row space-x-8">
            <div className="flex flex-col">
              <p>
                passengers <span className="uppercase">{passengers}</span>
              </p>

              <p>
                consumables <span className="uppercase">{consumables}</span>
              </p>
              <p>
                hyperdrive rating{' '}
                <span className="uppercase">{hyperdrive_rating}</span>
              </p>
            </div>
            <div className="flex flex-col text-right">
              <p>
                length <span className="uppercase">{length}</span>
              </p>
              <p>
                crew <span className="uppercase">{crew}</span>
              </p>
              <p>
                MGLT <span className="uppercase">{MGLT}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-12">
            <p>
              model <span className="uppercase">{model}</span>
            </p>
          </div>
        </div>
      </div> */}

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
                    className="h-52 w-40 z-10 object-cover"
                  />
                  <div className="flex flex-col items-center z-10 leading-10 text-font-color font-test font-medium text-xl">
                    <p className="uppercase">{name}</p>
                    <div className="flex flex-row space-x-8">
                      <div className="flex flex-col">
                        <p>
                          passengers{' '}
                          <span className="uppercase">{passengers}</span>
                        </p>

                        <p>
                          consumables{' '}
                          <span className="uppercase">{consumables}</span>
                        </p>
                        <p>
                          hyperdrive rating{' '}
                          <span className="uppercase">{hyperdrive_rating}</span>
                        </p>
                      </div>
                      <div className="flex flex-col text-right">
                        <p>
                          length <span className="uppercase">{length}</span>
                        </p>
                        <p>
                          crew <span className="uppercase">{crew}</span>
                        </p>
                        <p>
                          MGLT <span className="uppercase">{MGLT}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-12">
                      <p>
                        model <span className="uppercase">{model}</span>
                      </p>
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
