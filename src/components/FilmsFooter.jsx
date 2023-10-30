import { useEffect, useState } from 'react';
import ModalFooter from './ModalFooter';
import getInfo from './fetch/getInfo';
import useGetArray from '../hooks/useGetArray';

const films = [
  '/movie1.webp',
  '/movie2.webp',
  '/movie3.webp',
  '/movie4.webp',
  '/movie5.webp',
  '/movie6.webp',
];

export default function FilmsFooter() {
  const [movies, setMovies] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const url = 'https://swapi.dev/api/films';
    getInfo(url, controller)
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    return () => {
      controller.abort();
    };
  }, [isModalVisible]);

  const character = useGetArray(movies.map((a) => a.characters));
  const planet = useGetArray(movies.map((a) => a.planets));
  const starship = useGetArray(movies.map((a) => a.starships));
  const vehicle = useGetArray(movies.map((a) => a.vehicles));
  const specie = useGetArray(movies.map((a) => a.species));

  const toggleModal = (i) => {
    setModalVisible(true);
    setSelectedFilm(movies[i]);
    setSelectedImage(films[i]);
    setCharacters(character[i]);
    setPlanets(planet[i]);
    setStarships(starship[i]);
    setVehicles(vehicle[i]);
    setSpecies(specie[i]);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="flex h-[6rem] gap-2">
        {loading
          ? null
          : movies.map((film, i) => (
              <img
                key={i}
                src={films[i]}
                alt={`image de ${film}`}
                onClick={() => toggleModal(i)}
                className="relative object-cover duration-500 hover:bottom-[20px] hover:mx-10 hover:shadow hover:shadow-stone-500 hover:scale-[2]"
              />
            ))}
      </div>

      {isModalVisible && selectedFilm ? (
        <ModalFooter
          film={selectedFilm}
          close={closeModal}
          image={selectedImage}
          characters={characters}
          planets={planets}
          starships={starships}
          vehicles={vehicles}
          species={species}
        />
      ) : null}
    </>
  );
}
