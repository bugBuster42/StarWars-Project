export default function ModalFooter({ film = [], close, image }) {
  return (
    <>
      <div
        className="absolute z-[80] h-screen w-screen -translate-x-[0rem] -translate-y-[48.5rem]"
        onClick={close}
      ></div>
      <div className="absolute left-1/2 z-[100] w-auto backdrop-blur-3xl -translate-x-1/2 -translate-y-[43em]">
        <div className="rounded-lg border-2 border-primary text-font-color shadow dark:bg-gray-700">
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
              alt={`${image}`}
              className="relative w-80 object-cover shadow shadow-stone-500"
            />
            <div className="flex flex-col gap-5">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
