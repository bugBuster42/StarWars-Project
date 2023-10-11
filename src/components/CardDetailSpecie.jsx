export default function CardDetailSpecie({ specie }) {
  const {
    name,
    classification,
    designation,
    average_height,
    skin_colors,
    hair_colors,
    eye_colors,
    average_lifespan,
    homeworld,
    language,
    image,
  } = specie;

  return (
    <>
      <h1>Card détail specie</h1>
      <div className="bg-[url('./src/assets/fond-card-detail.png')] bg-no-repeat bg-center h-80 w-auto flex justify-center items-center space-x-8">
        <img src={image} alt="character" className="h-52 w-40 object-cover" />
        <div className="flex flex-col items-center leading-10 text-font-color font-test font-medium text-2xl">
          <p className="uppercase">{name}</p>
          <div className="flex flex-row space-x-8">
            <div className="flex flex-col">
              <p>
                gender <span className="uppercase">{classification}</span>
              </p>
              <p>
                homeworld <span className="uppercase">{designation}</span>
              </p>
              <p>
                mass <span className="uppercase">{average_height}</span>
              </p>
            </div>
            <div className="flex flex-col text-right">
              <p>
                species <span className="uppercase">{skin_colors}</span>
              </p>
              <p>
                year <span className="uppercase">{hair_colors}</span>
              </p>
              <p>
                height <span className="uppercase">{eye_colors}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-12">
            <p>
              hair <span className="uppercase">{average_lifespan}</span>
            </p>
            <p>
              skin <span className="uppercase">{homeworld}</span>
            </p>
            <p>
              eye <span className="uppercase">{language}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
