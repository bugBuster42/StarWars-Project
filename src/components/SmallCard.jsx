import ImageWithFallback from './ImageWithFallback';

export default function Smallcard({ image, name, role, fallback, size }) {
  return (
    <>
      <div className="clip-path-polygon">
        <figure className="h-auto w-72 bg-gradient-to-r from-primary-light to-primary-dark">
          <ImageWithFallback
            fallback={fallback}
            src={image}
            name={name}
            size={size}
          />
          <div className="flex h-36 flex-col p-4 font-main uppercase text-font-color">
            <figcaption className="mb-2 text-xl font-semibold">
              {name}
            </figcaption>
            <figcaption className="font-lg font-medium">{role}</figcaption>
          </div>
        </figure>
      </div>
    </>
  );
}
