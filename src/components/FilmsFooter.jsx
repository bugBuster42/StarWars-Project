import { useEffect, useState } from 'react';
import ModalFooter from './ModalFooter';
import getInfo from './fetch/getInfo';

const films = [
  './movie1.jpeg',
  './movie2.jpg',
  './movie3.jpg',
  './movie4.jpg',
  '/movie5.jpg',
  '/movie6.jpg',
];

export default function FilmsFooter() {
  const [movies, setMovies] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const url = 'https://swapi.dev/api/films';
    getInfo(url, controller)
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    return () => {
      controller.abort();
    };
  }, [isModalVisible]);

  const toggleModal = (i, image) => {
    setSelectedFilm(movies[i]);
    setModalVisible(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedFilm(null);
    setModalVisible(false);
  };

  return (
    <>
      <div className="flex h-[6rem] gap-2">
        {films.map((film, i) => (
          <img
            key={i}
            src={film}
            alt={`image de ${film}`}
            onClick={() => toggleModal(i, film)}
            className="relative object-cover duration-500 hover:bottom-[20px] hover:mx-10 hover:shadow hover:shadow-stone-500 hover:scale-[2]"
          />
        ))}
      </div>

      {isModalVisible && selectedFilm && (
        <ModalFooter
          film={selectedFilm}
          bool={true}
          close={closeModal}
          image={selectedImage}
        />
      )}
    </>
  );
}
