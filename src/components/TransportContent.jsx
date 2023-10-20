import Smallcard from './SmallCard';
import { motion } from 'framer-motion';

const initialX = 0;

const leftX = -1000;
const rightX = 1000;
const delay = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4];

export default function TransportContent({
  transports = [],
  object,
  fallback,
}) {
  return (
    <>
      <div>
        {transports
          .filter((x) => x !== null)
          .map((transport, index) => (
            <div key={index}>
              <motion.div
                key={index}
                initial={{
                  x: initialX,
                  position: 'absolute',
                  zIndex: 10 - index,
                  top: 300,
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
                  image={`https://starwars-visualguide.com/assets/img/${object}/${
                    transport.url.split('/')[5]
                  }.jpg`}
                  name={transport.name}
                  role={transport.model}
                  fallback={fallback}
                  size={48}
                />
              </motion.div>
            </div>
          ))}
      </div>
    </>
  );
}
