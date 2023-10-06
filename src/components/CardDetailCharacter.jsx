export default function CardDetailCharacter({ character }) {
  const {
    name,
    gender,
    species,
    homeworld,
    year,
    mass,
    height,
    hair,
    skin,
    eye,
  } = character;
  return (
    <>
      <h1>Card détail character</h1>
      <div className="bg-[url('./src/assets/fond-card-detail.png')] bg-no-repeat bg-center bg-[length:200px_100px]">
        {name}
      </div>
    </>
  );
}
