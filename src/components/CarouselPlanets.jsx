import { useState } from 'react';

export default function CarouselPlanets({ slides }) {
  const [currdeg, setCurrdeg] = useState(0);
  const [current, setCurrent] = useState(0);

  const nextSlide = (i) => {
    setCurrdeg((currdeg) => currdeg - 36 * (i - current));
    setCurrent(i);
  };
  console.log(currdeg);
  console.log(current);

  return (
    <>
      <div className="mt-48 flex justify-center">
        <div>
          <div className="perspective relative my-32 w-52">
            <div className="absolute mt-96 text-yellow-200">card détail</div>
            <div
              className={`transform-style rotate-y-[${currdeg}deg] absolute h-full w-full duration-[1000ms]`}
            >
              {slides.map((s, i) => (
                <img
                  src={s}
                  key={i}
                  onClick={() => {
                    nextSlide(i);
                  }}
                  className={`absolute block h-52 w-52 rounded-full bg-slate-600 object-cover [transform:rotateY(${
                    i * 36
                  }deg)translateZ(450px)]`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
