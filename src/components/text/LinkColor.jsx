import { NavLink } from 'react-router-dom';

export default function LinkColor(props) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) => {
        return isActive
          ? `${props.className} text-[#FFC500] m-2`
          : `${props.className} text-white m-2`;
      }}
    />
  );
}
