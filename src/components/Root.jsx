import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between bg-main bg-cover bg-fixed bg-center pt-8">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
