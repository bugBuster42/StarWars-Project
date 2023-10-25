export default function ModalFooter({ film = [], bool, close, image }) {
  console.log(film);
  return (
    <>
      {bool && (
        <div className="absolute left-1/2 z-[100] z-[100] w-auto -translate-x-1/2 -translate-y-[43em]">
          <div className="rounded-lg bg-primary shadow dark:bg-gray-700">
            <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
              <h3 className="text-xl font-semibold uppercase text-gray-900 dark:text-white">
                {film.title}
              </h3>
              <button
                type="button"
                onClick={close}
                className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                X
              </button>
            </div>
            <div className="grid grid-cols-2 gap-5 p-10 ">
              <div className="flex justify-center">
                <img
                  src={image}
                  alt={`image de ${image}`}
                  className="relative w-80 object-cover"
                />
              </div>
              <div className="border border-primary">
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
