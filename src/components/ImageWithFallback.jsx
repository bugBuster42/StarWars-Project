export default function ImageWithFallback({
  fallback,
  src,
  name,
  size = 80,
  cardDetail = false,
  planet = false,
}) {
  if (!fallback) {
    throw new Error('fallback prop required');
  }

  return (
    <img
      src={src}
      alt={name}
      className={`h-${size} ${cardDetail ? 'z-10 w-40' : 'w-72'} ${
        planet ? 'rounded-full' : ''
      }  object-cover shadow-lg`}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.target.src = fallback;
      }}
    />
  );
}
