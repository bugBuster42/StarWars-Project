import { Outlet } from 'react-router';
import NavBar from './NavBar';

export default function Root() {
  return (
    <>
      <div className="bg-[url('/Background.png')] bg-cover bg-center h-[100vh]">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}
