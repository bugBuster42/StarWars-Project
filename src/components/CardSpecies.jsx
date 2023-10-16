export default function CardSpecies({ children }) {
  return (
    <div
      className={
        'card-species scale-100 duration-300 hover:ml-10 hover:mr-10 hover:scale-125 [&:has(+.card-species:hover)]:scale-110 [&:hover+.card-species]:scale-110'
      }
    >
      {children}
    </div>
  );
}
