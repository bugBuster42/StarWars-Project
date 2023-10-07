import { NavLink } from 'react-router-dom';

export default function LinkColor(props) {
  const customProps = Object.assign({}, props);
  const className = props.className;
  delete customProps.className;
  return (
    <NavLink
      className={({ isActive }) => {
        return isActive
          ? `${className} text-[#FFC500] m-2`
          : `${className} text-white m-2`;
      }}
      {...customProps}
    />
  );
}
