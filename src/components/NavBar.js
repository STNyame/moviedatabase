import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink exact={true} to="/">
        Home
      </NavLink>
      <NavLink exact={true} to="/about">
        About
      </NavLink>
      <NavLink exact={true} to="/discover">
        Discover
      </NavLink>
    </div>
  );
}
