export default function Smallcard({ image, name, role }) {
  return (
    <>
      <div className="clip-path-polygon">
        <figure className="h-auto w-72 bg-gradient-to-r from-primary-light to-primary-dark">
          <img
            className="h-80 w-72 object-cover shadow-lg"
            src={image}
            alt={name}
          />
          <div className="p-5 font-main uppercase text-font-color">
            <figcaption className="text-xl font-semibold">{name}</figcaption>
            <figcaption className="font-lg font-medium">{role}</figcaption>
          </div>
        </figure>
      </div>
    </>
  );
}
