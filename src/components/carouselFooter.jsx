import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const films = [
  'movie1.jpeg',
  'movie2.jpg',
  'movie3.jpg',
  'movie4.jpg',
  'movie5.jpg',
  'movie6.jpg',
];

export default function CarouselFooter() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slide = (i) => {
    if (i < films.length && i >= 0) {
      setActiveIndex(i);
    }
  };

  const myImage = (image, index, style) => {
    return (
      <motion.img
        src={image}
        alt={image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`h-44 object-cover ${
          index === activeIndex ? '' : 'hidden'
        } ${style}`}
      />
    );
  };

  return (
    <div className="relative flex h-44 items-center justify-between">
      <div>
        {activeIndex > 0 ? (
          <button
            className="text-8xl text-text-yellow"
            onClick={() => slide(activeIndex - 1)}
          >
            {'<'}
          </button>
        ) : (
          ''
        )}
      </div>
      <AnimatePresence initial={false}>
        {films.map((film, index) => (
          <div key={index} className="perception flex">
            {index - 3 >= 0
              ? myImage(
                  films[index - 3],
                  index,
                  'rotate-y-[-20deg] scale-[0.6] translate-x-[100px] relative z-20',
                )
              : null}
            {index - 2 >= 0
              ? myImage(
                  films[index - 2],
                  index,
                  'rotate-y-[-15deg] scale-[0.7] translate-x-12 relative z-30',
                )
              : null}
            {index - 1 >= 0
              ? myImage(
                  films[index - 1],
                  index,
                  'rotate-y-[-10deg] scale-[0.8] translate-x-4 translate-y-2 relative z-40',
                )
              : null}
            {myImage(film, index, 'shadow shadow-stone-300 z-50')}
            {index + 1 < films.length
              ? myImage(
                  films[index + 1],
                  index,
                  'rotate-y-[10deg] scale-[0.8] translate-x-[-15px] translate-y-2 relative z-40',
                )
              : null}
            {index + 2 < films.length
              ? myImage(
                  films[index + 2],
                  index,
                  'rotate-y-[15deg] scale-[0.7] translate-x-[-50px] z-30',
                )
              : null}
            {index + 3 < films.length
              ? myImage(
                  films[index + 3],
                  index,
                  'rotate-y-[20deg] scale-[0.6] translate-x-[-100px] relative z-20',
                )
              : null}
          </div>
        ))}
      </AnimatePresence>
      <div>
        {activeIndex < films.length - 1 ? (
          <button
            className="text-8xl text-text-yellow"
            onClick={() => slide(activeIndex + 1)}
          >
            {'>'}
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
