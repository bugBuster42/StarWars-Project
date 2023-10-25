import CarouselFooter from './carouselFooter';

export default function Footer() {
  const films = [
    './movie1.jpeg',
    './movie2.jpg',
    './movie3.jpg',
    './movie4.jpg',
    '/movie5.jpg',
    '/movie6.jpg',
  ];
  return (
    <>
      <footer className="mt-44 h-20 w-screen border-t-2 border-primary backdrop-blur">
        <div className="relative bottom-[60px] flex justify-center ">
          <div className="flex h-[6rem] gap-5">
            {films.map((film, i) => (
              <img
                key={i}
                src={film}
                alt={`image de ${film}`}
                className="relative object-cover duration-500 hover:bottom-[20px] hover:mx-10 hover:scale-[2]"
              />
            ))}
          </div>
        </div>
        {/* <div className="relative bottom-32 flex justify-center">
          <CarouselFooter />
        </div>*/}
      </footer>
    </>
  );
}
