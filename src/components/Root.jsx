import { Outlet } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Root() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between bg-main bg-cover bg-fixed bg-center pt-20">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
