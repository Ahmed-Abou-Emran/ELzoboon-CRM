import "./NavItem.css";
import { NavLink } from "react-router-dom";
const NavItem = (props) => {
  return (
    <li className="navItem">
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "")}
        to={"/" + props.itemName}
      >
        <img src={props.iconName} alt={props.iconName} className="navIcon" />
        <span className="links_name">{props.itemName}</span>
      </NavLink>
      <span className="tooltip">{props.itemName}</span>
    </li>
  );
};
export default NavItem;
