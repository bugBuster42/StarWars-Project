import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getInfo from '../fetch/getInfo';
import Loading from '../Loading';
import HomeScrollingText from '../HomeScrollingText';
import Smallcard from '../SmallCard';
import Star from '../Star';

const categories = {
  people: 83,
  species: 37,
  starships: 43,
  vehicles: 39,
  planets: 60,
};

const getCategoryUrl = (category) => {
  switch (category) {
    case 'starships':
    case 'vehicles':
      return '/ships-vehicles';
    case 'people':
      return '/characters';
    default:
      return `/${category}`;
  }
};

const checkImage = (url) =>
  fetch(url, {
    method: 'HEAD',
  })
    .then((res) => {
      return res.ok;
    })
    .catch(() => false);

const fetchWithImageRetry = async (category, maxRetries, controller) => {
  let retries = 0;

  const fetchRandomData = async () => {
    if (retries >= maxRetries) {
      return null;
    }

    const randomId = Math.floor(Math.random() * categories[category]) + 1;
    const url = `https://swapi.dev/api/${category}/${randomId}/`;
    const imageCategory = category === 'people' ? 'characters' : category;
    const imageUrl = `https://starwars-visualguide.com/assets/img/${imageCategory}/${randomId}.jpg`;
    const imageExists = await checkImage(imageUrl);

    if (imageExists) {
      return await getInfo(url, controller);
    }

    retries += 1;
    return fetchRandomData();
  };

  return fetchRandomData();
};

export default function Home() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    Promise.all(
      Object.keys(categories).map((category) =>
        fetchWithImageRetry(category, 20, controller),
      ),
    )
      .then((results) => {
        const randomData = {};
        Object.keys(categories).map((category, index) => {
          randomData[category] = results[index];
        });
        setData(randomData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <div className="relative">
        {loading ? (
          <div className="absolute -top-16 ml-72 flex justify-center">
            <Loading />
          </div>
        ) : null}

        <HomeScrollingText />

        <div className="animation-delay-39000 flex animate-move-cards flex-wrap justify-center gap-5 translate-y-[5vh] transform">
          {Object.keys(data).map((category) => {
            const item = data[category];
            const id = item?.url ? item.url.split('/')[5] : null;
            const imageCategory =
              category === 'people' ? 'characters' : category;
            const imageUrl = `https://starwars-visualguide.com/assets/img/${imageCategory}/${id}.jpg`;
            const name = item?.name || '';

            return (
              <div
                className="relative transition-transform duration-500 ease-in-out hover:-translate-y-5 hover:scale-105"
                key={category}
              >
                <Link to={getCategoryUrl(category)}>
                  <Smallcard
                    name={name}
                    image={imageUrl}
                    fallback="/transport-placeholder.png"
                  />
                </Link>
                <div className="absolute bottom-4 left-4 font-main text-3xl  font-semibold uppercase text-primary-dark">
                  {category}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Star width="40" top="96" right="8" />
      <Star top="24" left="28" />
      <Star width="32" bottom="20" left="4" />
      <Star width="16" top="2" right="80" />
    </>
  );
}
