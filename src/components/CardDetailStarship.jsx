export default function CardDetailStarship({ starship, img }) {
  const {
    name,
    model,
    length,
    crew,
    passengers,
    consumables,
    hyperdrive_rating,
    MGLT,
  } = starship;
  return (
    <>
      <div className="mt-[28rem] flex justify-center">
        <div className="bg-[url('/card-support.png')] bg-no-repeat">
          <div className="group h-80 w-full">
            <div className="relative left-[64px] top-[33px] h-[236] w-[682px] origin-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute z-10 h-full w-full bg-no-repeat">
                <img src="/card-front.png" alt="" className="absolute z-0" />
                <div className="z-20 mt-3 flex items-center justify-center space-x-8 [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)]">
                  <img
                    src={
                      img
                        ? `https://starwars-visualguide.com/assets/img/starship/${img}.jpg`
                        : '/transport-placeholder.png'
                    }
                    alt="starship"
                    className="z-10 h-52 w-40 object-cover"
                  />
                  <div className="z-10 flex flex-col items-center font-test text-xl font-medium leading-10 text-font-color">
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
              <div className="absolute right-0 top-0 z-10 h-full w-full bg-primary/20 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <p>starship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
