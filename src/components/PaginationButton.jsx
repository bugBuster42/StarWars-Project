export default function PaginationButton({ index, onClick, isActive }) {
  return (
    <button
      key={index}
      onClick={onClick}
      className={` ${
        isActive
          ? 'mx-1 h-2 w-6 rounded-2xl bg-text-yellow'
          : 'h-2 w-3 rounded-2xl bg-font-color'
      }`}
    ></button>
  );
}
