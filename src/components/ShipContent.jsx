import { useState } from 'react';
import Smallcard from './SmallCard';

import { motion } from 'framer-motion';

export default function ShipContent({ ships = [] }) {
  let initialX = 0;

  const leftX = -1000;
  const rightX = 1000;
  const delay = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4];

  return (
    <>
      <div>
        {ships
          .filter((x) => x !== null)
          .map((ship, index) => (
            <div key={index}>
              <motion.div
                key={index}
                initial={{
                  x: initialX,
                  position: 'absolute',
                  zIndex: 10 - index,
                  top: 250,
                  left: 750,
                }}
                animate={[{ x: [initialX, leftX, rightX, initialX] }]}
                transition={{
                  duration: 5,
                  ease: 'linear',
                  times: [0, 0.5, 0.5, 1],
                  repeat: Infinity,
                  delay: delay[index],
                }}
              >
                <Smallcard
                  image={`https://starwars-visualguide.com/assets/img/starships/${
                    ship.url.split('/')[5]
                  }.jpg`}
                  name={ship.name}
                  role={ship.model}
                  fallback="/ship-placeholder.jpg"
                  size={48}
                />
              </motion.div>
            </div>
          ))}
      </div>
    </>
  );
}
