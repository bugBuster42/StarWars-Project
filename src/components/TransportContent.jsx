import { memo, useState } from 'react';
import CardDetailStarship from './CardDetailStarship';
import TransportAnimation from './TransportAnimation';

const TransportAnimationMemo = memo(TransportAnimation);

export default function TransportContent({
  transports = [],
  object,
  fallback,
}) {
  const [cardDetail, setCardDetail] = useState(0);
  const [imgCard, setImgCard] = useState('');

  return (
    <>
      <div>
        <TransportAnimationMemo
          transports={transports}
          fallback={fallback}
          object={object}
          setCardDetail={setCardDetail}
          setImgCard={setImgCard}
        />
      </div>
      {transports[cardDetail] === undefined ? null : (
        <CardDetailStarship
          starship={transports[cardDetail]}
          img={imgCard}
          object={object}
        />
      )}
    </>
  );
}
