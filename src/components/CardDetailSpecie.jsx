import useFetchByArray from '../hooks/useFetchByArray';
import ImageWithFallback from './ImageWithFallback';
import { useEffect, useState } from 'react';
import getInfo from './fetch/getInfo';

export default function CardDetailSpecie({ specie, img }) {
  const {
    name,
    people,
    homeworld,
    classification,
    designation,
    average_height,
    skin_colors,
    average_lifespan,
    language,
  } = specie;

  const [fetchHomeworld, setFetchHomeworld] = useState(null);

  const fetchPeople = useFetchByArray(people);

  const namesOfPeople = fetchPeople.map((a, i) => (
    <li className="pl-1" key={i}>
      {a.name}
    </li>
  ));

  useEffect(() => {
    const controller = new AbortController();
    const url = homeworld;

    (async () => {
      if (url === null) {
        setFetchHomeworld(null);
      } else {
        try {
          const data = await getInfo(url, controller);
          setFetchHomeworld(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    })();

    return () => {
      controller.abort();
    };
  }, [homeworld]);

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-[url('/card-support.png')] bg-no-repeat">
          <div className="group h-80 w-full">
            <div className="relative left-[64px] top-[33px] h-[236] w-[682px] origin-center transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute z-10 h-full w-full bg-no-repeat">
                <img src="/card-front.png" alt="" className="absolute z-0" />
                <div className="z-20 mt-3 flex items-center justify-center space-x-8 [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)]">
                  <ImageWithFallback
                    fallback={'/Chewbacca.jpeg'}
                    src={`https://starwars-visualguide.com/assets/img/species/${img}.jpg`}
                    name={'species'}
                    size={52}
                    cardDetail={true}
                  />
                  <div className="z-10 flex flex-col items-center font-test text-xl font-medium leading-9 text-font-color">
                    <p className="uppercase">{name}</p>
                    <div className="flex flex-row space-x-8">
                      <div className="flex flex-col">
                        <p>
                          Classification :{' '}
                          <span className="uppercase">{classification}</span>
                        </p>
                        <p>
                          Designation :{' '}
                          <span className="uppercase">{designation}</span>
                        </p>
                        <p>
                          Average Height :{' '}
                          <span className="uppercase">{average_height}</span>
                        </p>
                      </div>
                      <div className="flex flex-col text-right">
                        <p>
                          Average Lifespan :{' '}
                          <span className="uppercase">{average_lifespan}</span>
                        </p>
                        <p>
                          Language :{' '}
                          <span className="uppercase">{language}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-12">
                      <p>
                        Skin : <span className="uppercase">{skin_colors}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 z-10 h-full w-full bg-primary/20 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <p className="font-medium-5 my-4 text-center font-test text-xl text-font-color">
                    Homeworld :{' '}
                    {fetchHomeworld ? (
                      <span>{fetchHomeworld.name}</span>
                    ) : (
                      'null'
                    )}
                  </p>
                  <div className="font-medium-5 my-4 text-center font-test text-xl text-font-color">
                    <span className="flex">
                      People : <ul>{namesOfPeople}</ul>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
