import { useEffect, useState } from 'react';
import ModalFooter from './ModalFooter';
import getInfo from '../fetch/getInfo';

const films = [
  '/movie-1.webp',
  '/movie-2.webp',
  '/movie-3.webp',
  '/movie-4.webp',
  '/movie-5.webp',
  '/movie-6.webp',
];

export default function FilmsFooter() {
  const [movies, setMovies] = useState([]);
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

  const toggleModal = (i) => {
    setModalVisible(true);
    setSelectedFilm(movies[i]);
    setSelectedImage(films[i]);
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
        />
      ) : null}
    </>
  );
}
