import { Outlet } from 'react-router';
import NavBar from './NavBar';

export default function Root() {
  return (
    <>
      <div className="min-h-screen bg-main bg-cover bg-fixed bg-center pt-20">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}
