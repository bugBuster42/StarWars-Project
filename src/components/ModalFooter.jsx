import useFetchByArray from '../hooks/useFetchByArray';

export default function ModalFooter({ film = [], close, image }) {
  const characters = useFetchByArray(film.characters);
  const planets = useFetchByArray(film.planets);
  const starships = useFetchByArray(film.starships);
  const vehicles = useFetchByArray(film.vehicles);
  const species = useFetchByArray(film.species);

  return (
    <>
      <div
        className="absolute z-[80] h-screen w-screen -translate-x-[0rem] -translate-y-full"
        onClick={close}
      ></div>
      <div className="absolute left-1/2 z-[100] h-[650px] w-auto backdrop-blur-3xl -translate-x-1/2 -translate-y-[110%]">
        <div className="h-[650px] rounded-lg border-2 border-primary text-font-color shadow dark:bg-gray-700">
          <div className="flex items-start justify-between rounded-t border-b p-4">
            <h3 className="text-xl font-semibold uppercase">{film.title}</h3>
            <button
              type="button"
              onClick={close}
              className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              X
            </button>
          </div>
          <div className="grid grid-cols-2 gap-5 p-10 ">
            <img
              src={image}
              alt={`image de ${image}`}
              className="relative w-80 object-cover shadow shadow-stone-500"
            />
            <div className="flex h-[500px] flex-col gap-5 overflow-y-scroll">
              <ul>
                <li>
                  director: <span className="uppercase">{film.director}</span>
                </li>
                <li>
                  producer: <span className="uppercase">{film.producer}</span>
                </li>
                <li>
                  release date:{' '}
                  <span className="uppercase">{film.release_date}</span>
                </li>
              </ul>
              <p className="text-lg leading-7">{film.opening_crawl}</p>
              <ul className="flex flex-col gap-5">
                <li>
                  <span className="font-bold uppercase">Characters:</span>
                  <ul>
                    {characters.map((a, i) => (
                      <li key={i}>{a.name}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <span className="font-bold uppercase"> Planets:</span>
                  <ul>
                    {planets.map((a, i) => (
                      <li key={i}>{a.name}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <span className="font-bold uppercase"> Starships:</span>
                  <ul>
                    {starships.map((a, i) => (
                      <li key={i}>{a.name}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <span className="font-bold uppercase"> Vehicles:</span>
                  <ul>
                    {vehicles.map((a, i) => (
                      <li key={i}>{a.name}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <span className="font-bold uppercase"> Species:</span>
                  <ul>
                    {species.map((a, i) => (
                      <li key={i}>{a.name}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
