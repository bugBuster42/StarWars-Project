export default function Star({
  top = '',
  left = '',
  bottom = '',
  right = '',
  width = 36,
}) {
  return (
    <>
      <div
        className={`fixed ${top !== '' ? `top-${top}` : ''} ${
          left !== '' ? `left-${left}` : ''
        } ${bottom !== '' ? `bottom-${bottom}` : ''} ${
          right !== '' ? `right-${right}` : ''
        }`.trim()}
      >
        <img className={`w-${width} animate-pulse`} src="/my-star.png" alt="" />
      </div>
    </>
  );
}
