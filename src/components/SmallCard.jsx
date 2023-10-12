import ImageWithFallback from './getImage';

export default function Smallcard({ image, name, role }) {
  return (
    <>
      <div className="clip-path-polygon">
        <figure className="h-auto w-72 bg-gradient-to-r from-primary-light to-primary-dark">
          {
            <ImageWithFallback
              fallback="https://static.hitek.fr/img/actualite/2013/09/30/w_tfg3d0.jpg"
              src={image}
              name={name}
            />
          }
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
