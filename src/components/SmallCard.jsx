export default function Smallcard({ image, name, role, size = 'default' }) {
  const getSizeClass = () => {
    if (size === 'scrollingCardSize') {
      return {
        cardSize: 'w-36 h-40',
        textSize: 'text-xs',
        imageClass: 'w-30 h-20',
        paddingClass: 'p-2',
      };
    }
    return {
      cardSize: 'w-72 h-80',
      textSize: 'text-xl',
      imageClass: 'w-72 h-80',
      paddingClass: 'p-5',
    };
  };

  const { cardSize, textSize, imageClass, paddingClass } = getSizeClass();

  return (
    <>
      <div className="clip-path-polygon">
        <figure
          className={`bg-gradient-to-r from-primary-light to-primary-dark ${cardSize} h-auto`}
        >
          <img
            className={`shadow-lg ${imageClass} object-cover`}
            src={image}
            alt={name}
          />
          <div
            className={`${paddingClass} font-main uppercase text-font-color`}
          >
            <figcaption className={`font-semibold ${textSize}`}>
              {name}
            </figcaption>
            <figcaption className={`font-medium ${textSize}`}>
              {role}
            </figcaption>
          </div>
        </figure>
      </div>
    </>
  );
}
