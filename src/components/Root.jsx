import { Outlet } from 'react-router';
import NavBar from './NavBar';

export default function Root() {
  return (
    <>
      <div className="bg-[url('/background.png')] bg-cover bg-center h-screen">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}
