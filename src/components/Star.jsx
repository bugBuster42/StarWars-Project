import { motion } from 'framer-motion';

const initialX = 0;
const rightX = 2000;

export default function Star({
  top = '',
  left = '',
  bottom = '',
  right = '',
  width = 36,
}) {
  return (
    <>
      <div
        className={` fixed ${top !== '' ? `top-${top}` : ''} ${
          left !== '' ? `left-${left}` : ''
        } ${bottom !== '' ? `bottom-${bottom}` : ''} ${
          right !== '' ? `right-${right}` : ''
        }`}
      >
        <img className={`w-${width} animate-pulse`} src="/my-star.png" alt="" />
      </div>
    </>
  );
}
