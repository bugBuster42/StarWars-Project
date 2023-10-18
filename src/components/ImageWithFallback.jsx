export default function ImageWithFallback({ fallback, src, name }) {
  const defaultImage = './ship-placeholder.jpg';

  return (
    <img
      src={src}
      alt={name}
      className="h-80 w-72 object-cover shadow-lg"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.target.src = fallback || defaultImage;
      }}
    />
  );
}
