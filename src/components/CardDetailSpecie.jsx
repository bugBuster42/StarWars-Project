export default function CardDetailSpecie({ specie, img }) {
  const {
    name,
    classification,
    designation,
    average_height,
    skin_colors,
    average_lifespan,
    language,
  } = specie;

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-[url('/card-support.png')] bg-no-repeat">
          <div className="group h-80 w-full">
            <div className="relative left-[64px] top-[33px] h-[236] w-[682px] origin-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute z-10 h-full w-full bg-no-repeat">
                <img src="/card-front.png" alt="" className="absolute z-0" />
                <div className="z-20 mt-3 flex items-center justify-center space-x-8 [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)]">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/species/${img}.jpg`}
                    onError={(e) => {
                      e.target.src = '/Chewbacca.jpeg';
                    }}
                    alt="species"
                    className="z-10 h-52 w-40 object-cover"
                  />
                  <div className="z-10 flex flex-col items-center font-test text-xl font-medium leading-10 text-font-color">
                    <p className="uppercase">{name}</p>
                    <div className="flex flex-row space-x-8">
                      <div className="flex flex-col">
                        <p>
                          classification{' '}
                          <span className="uppercase">{classification}</span>
                        </p>
                        <p>
                          designation{' '}
                          <span className="uppercase">{designation}</span>
                        </p>
                        <p>
                          average_height{' '}
                          <span className="uppercase">{average_height}</span>
                        </p>
                      </div>
                      <div className="flex flex-col text-right">
                        <p>
                          average_lifespan{' '}
                          <span className="uppercase">{average_lifespan}</span>
                        </p>
                        <p>
                          language <span className="uppercase">{language}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-12">
                      <p>
                        skin <span className="uppercase">{skin_colors}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 z-10 h-full w-full bg-primary/20 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <p>species</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
