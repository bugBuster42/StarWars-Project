export default function Smallcard({ image, name, role }) {
  return (
    <>
      <div className="clip-path-polygon">
        <figure className="bg-gradient-to-r from-primary-light to-primary-dark w-72 h-auto">
          <img
            className="shadow-lg w-72 h-80 object-cover"
            src={image}
            alt={name}
          />
          <div className="p-5 text-font-color uppercase font-main">
            <figcaption className="font-semibold text-xl">{name}</figcaption>
            <figcaption className="font-lg font-medium">{role}</figcaption>
          </div>
        </figure>
      </div>
    </>
  );
}
