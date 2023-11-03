import { motion } from 'framer-motion';

const initialX = 0;
const rightX = 2000;

export default function MovingStar({
  top,
  width = 36,
  duration = 15,
  delay = 0,
}) {
  return (
    <>
      <motion.div
        initial={{
          x: initialX,
          position: 'fixed',
          zIndex: 1,
          top,
          left: -200,
        }}
        animate={[{ x: [initialX, rightX, initialX] }]}
        transition={{
          duration,
          ease: 'linear',
          times: [0, 1, 1],
          repeat: Infinity,
          delay,
        }}
      >
        <img
          className={`w-${width} animate-pulse`}
          src={`${import.meta.env.BASE_URL}/my-star.png`}
          alt=""
        />
      </motion.div>
    </>
  );
}
