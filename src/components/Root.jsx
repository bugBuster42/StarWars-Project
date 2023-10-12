import { Outlet } from 'react-router';
import NavBar from './NavBar';

export default function Root() {
  return (
    <>
      <div
        style={{ '--image-url': `url('/background.png')` }}
        className="bg-[image:var(--image-url)] bg-cover bg-fixed bg-center pt-20"
      >
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}
