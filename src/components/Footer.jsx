import FilmsFooter from './FilmsFooter';

export default function Footer() {
  return (
    <>
      <footer className="z-[100] mt-44 h-20 w-screen border-t-2 border-primary before:absolute before:h-full before:w-full before:backdrop-blur">
        <div className="relative bottom-[60px] flex justify-center ">
          <FilmsFooter />
        </div>
      </footer>
    </>
  );
}
