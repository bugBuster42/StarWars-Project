export default function HomeScrollingText() {
  return (
    <div className="star-wars-opening-crawl-effect relative mx-auto h-[350px] w-[1550px] overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 top-0 animate-scroll-text">
        <div className="mx-auto w-3/5 text-justify text-4xl font-bold leading-loose text-text-yellow">
          <h1 className="text-center">WELCOME TO THE STAR WARS ENCYCLOPEDIA</h1>
          <p>
            {`You are about to embark on an epic adventure across a galaxy far,
            far away. On this site, every corner of the Star Wars Universe is at
            your fingertips. Have you ever wondered where Yoda comes from? Dive
            into our species section to uncover the mysteries of the Force.
            Curious about Darth Vader's home planet? Navigate through our
            galactic atlas to explore the worlds that shaped our favorite heroes
            and villains. Every character, every species, every planet, and
            every ship has a story. Here, click on a card to reveal hidden
            details and intricate connections that make Star Wars an
            unforgettable saga. Whether you're a Padawan seeking knowledge or an
            accomplished Jedi Master, there's always something new to discover.`}
          </p>
          <p>{'May the Force be with you...'}</p>
        </div>
      </div>
    </div>
  );
}
