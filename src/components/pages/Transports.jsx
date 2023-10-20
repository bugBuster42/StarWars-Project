import { useState } from 'react';
import Transport from '../TransportPage';

export default function Transports() {
  const [transport, setTransport] = useState(true);

  return (
    <>
      <div className="px-32 pt-36">
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
            Vehicule
          </button>
        </div>
        {transport ? (
          <Transport object="starships" />
        ) : (
          <Transport object="vehicles" />
        )}
      </div>
    </>
  );
}
