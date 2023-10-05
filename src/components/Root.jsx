import { Outlet } from 'react-router';
import NavBar from './NavBar';

export default function Root() {
  return (
    <>
      <div className="bg-[url('/Background.png')] bg-cover bg-center h-[100vh]">
        <NavBar />
        <img
          className="absolute left-1/2 top-[20px] w-[150px]"
          src="src\assets\star.png"
        />
        <img className="absolute bottom-0" src="src\assets\star.png" />
        <img className="absolute right-0" src="src\assets\star.png" />
        <img className="absolute" src="src\assets\star.png" />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
