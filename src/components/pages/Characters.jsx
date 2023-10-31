import CharacterScrollingCard from '../CharacterScrollingCard';
import Star from '../Star';

export default function Characters() {
  return (
    <>
      <CharacterScrollingCard />
      <Star width="28" bottom="96" left="44" />
      <Star width="14" top="44" right="56" />
      <Star width="14" bottom="20" right="[38rem]" />
      <Star width="20" top="2" left="28" />
    </>
  );
}
