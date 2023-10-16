export default function PaginationButton({ index, onClick, isActive }) {
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
