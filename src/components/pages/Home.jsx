import { useEffect, useState } from 'react';
import getInfo from '../fetch/getInfo';
import Loading from '../Loading';
import HomeScrollingText from '../HomeScrollingText';
import Smallcard from '../SmallCard';

const categories = {
  people: 83,
  planets: 60,
  starships: 43,
  vehicles: 39,
  species: 37,
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
      const data = await getInfo(url, controller);
      return data;
    }

    retries += 1;
    return fetchRandomData();
  };

  return await fetchRandomData();
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
        Object.keys(categories).forEach((category, index) => {
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

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <HomeScrollingText />
      <div className="animation-delay-40000 flex translate-y-[1vh] transform animate-move-cards flex-wrap justify-center gap-5">
        {Object.keys(data).map((category) => {
          const item = data[category];
          const id = item?.url ? item.url.split('/')[5] : null;
          const imageCategory = category === 'people' ? 'characters' : category;
          const imageUrl = `https://starwars-visualguide.com/assets/img/${imageCategory}/${id}.jpg`;
          const name = item?.name || '';

          return (
            <div className key={category}>
              <h1>{category}</h1>
              <Smallcard role={category} name={name} image={imageUrl} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
