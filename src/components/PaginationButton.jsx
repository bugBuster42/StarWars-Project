export default function PaginationButton({ index, onClick, isActive }) {
  console.log(onClick);
  return (
    <button
      key={index}
      onClick={onClick}
      className={`rounded-2xl bg-font-color ${
        isActive ? 'mx-1 h-2 w-6' : 'h-2 w-3'
      }`}
    ></button>
  );
}
