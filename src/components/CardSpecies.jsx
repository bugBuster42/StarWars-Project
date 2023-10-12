export default function CardSpecies({ addClass, children }) {
  return (
    <div
      className={
        addClass +
        ' scale-100 duration-300 hover:ml-10 hover:mr-10 hover:scale-125'
      }
    >
      {children}
    </div>
  );
}
