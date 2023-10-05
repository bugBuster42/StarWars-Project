import { Link } from 'react-router-dom';
import Logo from './Icons/Logo';
import MenuItem from './MenuItem';
import CharacterIcon from './Icons/CharactersIcon';

export default function NavBar() {
  return (
    <div className="flex justify-between absolute w-full z-10">
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-col">
        <MenuItem url="characters" icon={<CharacterIcon />} text="Characters" />
        {/* <MenuItem url="ships" icon={Ships} text="Ships" />
        <MenuItem url="races" icon={Races} text="Races" />
        <MenuItem url="planets" icon={Planets} text="Planets" /> */}
      </div>
    </div>
  );
}
