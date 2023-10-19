import { motion } from 'framer-motion';

const initialX = 0;
const rightX = 2000;

export default function MovingStar({ top, width = 36, time = 15, delay = 0 }) {
  return (
    <>
      <motion.div
        initial={{
          x: initialX,
          position: 'fixed',
          zIndex: 1,
          top: top,
          left: -200,
        }}
        animate={[{ x: [initialX, rightX, initialX] }]}
        transition={{
          duration: time,
          ease: 'linear',
          times: [0, 1, 1],
          repeat: Infinity,
          delay: delay,
        }}
      >
        <img className={`w-${width} animate-pulse`} src="/my-star.png" alt="" />
      </motion.div>
    </>
  );
}
