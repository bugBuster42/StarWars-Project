import Title from '../text/Title';
import HomeScrollingText from '../HomeScrollingText';
import SmallCard from '../SmallCard';

export default function Home() {
  return (
    <>
      <HomeScrollingText />
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        <SmallCard
          image="image1.jpg"
          name="Characters"
          role="Rôle Characters"
        />
        <SmallCard image="image2.jpg" name="Ships" role="Rôle Ships" />
        <SmallCard image="image3.jpg" name="Vehicles" role="Rôle Vehicles" />
        <SmallCard image="image4.jpg" name="Species" role="Rôle Species" />
        <SmallCard image="image5.jpg" name="Planets" role="Rôle Planets" />
      </div>
    </>
  );
}
