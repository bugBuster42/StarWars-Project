import CarouselPlanets from '../CarouselPlanets';
import Title from '../text/Title';

export default function Planets() {
  const slides = [
    'https://starwars-visualguide.com/assets/img/planets/2.jpg',
    'https://starwars-visualguide.com/assets/img/planets/3.jpg',
    'https://starwars-visualguide.com/assets/img/planets/4.jpg',
    'https://starwars-visualguide.com/assets/img/planets/5.jpg',
    'https://starwars-visualguide.com/assets/img/planets/6.jpg',
    'https://starwars-visualguide.com/assets/img/planets/7.jpg',
    'https://starwars-visualguide.com/assets/img/planets/8.jpg',
    'https://starwars-visualguide.com/assets/img/planets/9.jpg',
    'https://starwars-visualguide.com/assets/img/planets/10.jpg',
    'https://starwars-visualguide.com/assets/img/planets/11.jpg',
  ];
  return (
    <>
      <Title>Planets</Title>
      <CarouselPlanets slides={slides} />
    </>
  );
}
