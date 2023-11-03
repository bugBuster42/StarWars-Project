import { motion } from 'framer-motion';

const colors = ['green', 'blue', 'red', 'yellow'];
const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];
export default function Loading() {
  return (
    <>
      <div className={`justify-top flex items-center gap-4`}>
        <img
          className="h-20 rotate-270"
          src={`${import.meta.env.BASE_URL}laser-base-white.png`}
        ></img>
        <motion.div
          initial={{ width: '10px' }}
          animate={[{ width: '1500px' }]}
          transition={{
            duration: 5,
            ease: 'circInOut',
            times: [0, 1],
            repeat: Infinity,
          }}
        >
          <div
            className={`border-fluo-${randomColor} bg-light-${randomColor} shadow-${randomColor} mt-1 h-3 rounded-r-full border-2 border-solid shadow`}
          ></div>
        </motion.div>
      </div>
    </>
  );
}
