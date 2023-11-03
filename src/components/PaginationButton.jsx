export default function PaginationButton({ index, onClick, isActive }) {
  return (
    <button
      key={index}
      onClick={onClick}
      className={`h-2 rounded-2xl ${
        isActive ? 'mx-1 w-6 bg-text-yellow' : 'w-3 bg-font-color'
      }`}
    ></button>
  );
}
