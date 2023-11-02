import Smallcard from './SmallCard';
import { motion } from 'framer-motion';

const initialX = '70vw';

const leftX = '-20vw';
const rightX = '92vw';
const delay = [0, 2, 4, 6, 8];

export default function TransportAnimation({
  transports,
  fallback,
  object,
  setCardDetail,
  setImgCard,
}) {
  return (
    <>
      {transports
        .filter((x) => x !== null)
        .map((transport, index) => (
          <div
            key={index}
            onClick={() => {
              setCardDetail(index);
              setImgCard(transport.url.split('/')[5]);
            }}
          >
            <motion.div
              key={index}
              initial={{
                x: initialX,
                position: 'absolute',
                zIndex: 10 - index,
                top: '90px',
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
    </>
  );
}
