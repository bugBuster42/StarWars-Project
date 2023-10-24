export default function ImageWithFallback({ fallback, src, name, size = 80 }) {
  return (
    <img
      src={src}
      alt={name}
      className={`h-${size} w-72 object-cover shadow-lg`}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.target.src = fallback;
      }}
    />
  );
}
