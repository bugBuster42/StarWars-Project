import { Link } from 'react-router-dom';
import Logo from './icons/Logo';
import MenuItem from './MenuItem';
import CharacterIcon from './icons/CharactersIcon';

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
      </div>
    </div>
  );
}
