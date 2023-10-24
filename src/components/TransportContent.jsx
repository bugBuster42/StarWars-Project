import Smallcard from './SmallCard';
import { motion } from 'framer-motion';

const initialX = 0;

const leftX = -2000;
const rightX = 500;
const delay = [0, 2, 4, 6, 8];

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
                  left: 1500,
                }}
                animate={[{ x: [initialX, leftX, rightX, initialX] }]}
                transition={{
                  duration: 10,
                  ease: 'linear',
                  times: [0, 0.8, 0.8, 1],
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
