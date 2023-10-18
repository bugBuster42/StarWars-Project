import CardSpecies from '../CardSpecies';
import Smallcard from '../SmallCard';

export default function Species() {
  const cards = [1, 2, 3, 4, 5];

  const cardsIndex = cards.map((x) => (
    <CardSpecies key={x}>
      <Smallcard />
    </CardSpecies>
  ));

  return <div className="mt-10 flex justify-center gap-5">{cardsIndex}</div>;
}
