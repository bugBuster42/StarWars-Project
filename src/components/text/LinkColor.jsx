import { NavLink } from 'react-router-dom';

export default function LinkColor(props) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) => {
        return isActive
          ? `${props.className} m-2 text-text-yellow`
          : `${props.className} m-2 text-white`;
      }}
    />
  );
}
