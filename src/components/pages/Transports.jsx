import { useState } from 'react';
import Transport from '../TransportPage';
import MovingStar from '../MovingStar';
import Star from '../Star';
import Loading from '../Loading';

export default function Transports() {
  const [transport, setTransport] = useState(true);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="absolute top-[9px] ml-72 flex justify-center">
        {loading ? <Loading /> : null}
      </div>
      <div className="px-32 pt-[80px]">
        <div className="relative z-20 ">
          <div className="flex gap-3">
            <button
              className={`uppercase text-font-color hover:underline ${
                transport ? 'text-text-yellow' : ''
              }`}
              onClick={() => {
                setTransport(true);
              }}
            >
              Ships
            </button>
            <p className="uppercase text-font-color">/</p>
            <button
              className={`uppercase text-font-color hover:underline ${
                transport ? '' : 'text-text-yellow'
              }`}
              onClick={() => {
                setTransport(false);
              }}
            >
              Vehicles
            </button>
          </div>
          {transport ? (
            <Transport
              loading={loading}
              setLoading={setLoading}
              object="starships"
            />
          ) : (
            <Transport
              loading={loading}
              setLoading={setLoading}
              object="vehicles"
            />
          )}
        </div>
      </div>
      <MovingStar top="50px" width="20" />
      <MovingStar top="500px" delay="6" />
      <MovingStar top="800px" width="28" delay="2" />
      <MovingStar top="750px" width="14" delay="10" />
      <Star width="28" bottom="40" left="28" />
      <Star width="14" top="32" right="56" />
      <Star width="14" bottom="80" right="96" />
      <Star width="20" top="96" left="96" />
    </>
  );
}
