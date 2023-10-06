import './App.css';
import CardDetailCharacter from './components/CardDetailCharacter';
import CardDetailPlanet from './components/CardDetailPlanet';
import CardDetailSpecie from './components/CardDetailSpecie';
import CardDetailStarship from './components/CardDetailStarship';
import CardDetailVehicle from './components/CardDetailVehicle';

function App() {
  const character = {
    name: 'Luke Skywalker',
    gender: 'Male',
    species: 'Human',
    homeworld: 'Tatoonie',
    year: '19BBY',
    mass: '75 kg',
    height: '172 cm',
    hair: 'Blond',
    skin: 'Fair',
    eye: 'Blue',
  };

  return (
    <>
      <CardDetailCharacter character={character} />
      <CardDetailSpecie />
      <CardDetailStarship />
      <CardDetailPlanet />
      <CardDetailVehicle />
    </>
  );
}

export default App;
