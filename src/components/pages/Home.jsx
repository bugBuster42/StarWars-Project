import HomeScrollingText from '../HomeScrollingText';
import SmallCard from '../SmallCard';

export default function Home() {
  return (
    <>
      <HomeScrollingText />
      <div className="translate-cards-animation-delay flex translate-y-[1vh] transform animate-move-cards flex-wrap justify-center gap-10">
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
