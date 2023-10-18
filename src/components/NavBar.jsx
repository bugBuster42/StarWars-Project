import { Link } from 'react-router-dom';
import Logo from './icons/Logo';
import MenuItem from './MenuItem';
import CharacterIcon from './icons/CharacterIcon';
import ShipIcon from './icons/ShipIcon';
import SpecieIcon from './icons/SpecieIcon';
import PlanetIcon from './icons/PlanetIcon';

export default function NavBar() {
  return (
    <div className="absolute z-10 flex w-full justify-between pr-4 pt-5">
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-col">
        <MenuItem url="characters" icon={<CharacterIcon />} text="Characters" />
        {/* <MenuItem url="ships" icon={<ShipIcon />} text="ships" /> */}
        {/* <MenuItem url="species" icon={<SpecieIcon />} text="species" /> */}
        <MenuItem url="planets" icon={<PlanetIcon />} text="planets" />
      </div>
    </div>
  );
}
