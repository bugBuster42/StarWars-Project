import CardDetailCharacter from './components/CardDetailCharacter';
import CardDetailPlanet from './components/CardDetailPlanet';
import CardDetailSpecie from './components/CardDetailSpecie';
import CardDetailStarship from './components/CardDetailStarship';
import CardDetailVehicle from './components/CardDetailVehicle';
import Planet from './pages/Planet';

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
    image: 'https://starwars-visualguide.com/assets/img/characters/6.jpg',
  };

  const planet = {
    name: 'Yavin IV',
    rotation_period: '24',
    orbital_period: '4818',
    diameter: '10200',
    climate: 'temperate, tropical',
    gravity: '1 standard',
    terrain: 'jungle, rainforests',
    surface_water: '8',
    population: '1000',
    image: 'https://starwars-visualguide.com/assets/img/planets/2.jpg',
  };

  const starship = {
    name: 'Death Star',
    model: 'DS-1 Orbital Battle Station',
    length: '120000',
    crew: '342,953',
    passengers: '843,342',
    consumables: '3 years',
    hyperdrive_rating: '4.0',
    MGLT: '10',
    image: 'https://starwars-visualguide.com/assets/img/starships/12.jpg',
  };

  const specie = {
    name: 'Human',
    classification: 'mammal',
    designation: 'sentient',
    average_height: '180',
    skin_colors: 'caucasian, black, asian, hispanic',
    hair_colors: 'blonde, brown, black, red',
    eye_colors: 'brown, blue, green, hazel, grey, amber',
    average_lifespan: '120',
    homeworld: 'https://swapi.dev/api/planets/9/',
    language: 'Galactic Basic',
    image: '../src/assets/Chewbacca.jpeg',
  };

  return (
    <>
      {/* <Planet/> */}
      <CardDetailCharacter character={character} />
      {/* <CardDetailSpecie specie={specie}/>
      <CardDetailStarship starship={starship}/>
      <CardDetailPlanet planet={planet}/> */}
      {/* <CardDetailVehicle /> */}
    </>
  );
}

export default App;
