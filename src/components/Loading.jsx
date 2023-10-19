import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <>
      <div className="justify-top mt-36 flex items-center gap-4">
        <img className="h-20 rotate-270" src="/laser-base-white.png"></img>
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
          <div className="mt-1 h-3 rounded-r-full border-2 border-solid border-fluo-green bg-light-green shadow shadow-laser"></div>
        </motion.div>
      </div>
    </>
  );
}
