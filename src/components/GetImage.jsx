export default function GetImage({ fallback, src, name }) {
  return (
    <img
      src={src}
      alt={name}
      className="h-80 w-72 object-cover shadow-lg"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallback;
      }}
    />
  );
}
