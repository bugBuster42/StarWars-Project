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
      <div className="bg-[url('./src/assets/fond-card-detail.png')] bg-no-repeat bg-center h-80 w-auto flex justify-center items-center space-x-8">
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
      </div>
    </>
  );
}
