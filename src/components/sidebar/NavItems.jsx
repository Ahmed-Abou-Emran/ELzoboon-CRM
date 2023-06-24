import "./NavItems.css";
import NavItem from "./NavItem";

// icons
import home from "../../assets/icons/svg icons/vuesax/bulk/home-2.svg";
import contacts from "../../assets/icons/svg icons/vuesax/bulk/people.svg";
import companies from "../../assets/icons/svg icons/vuesax/bulk/buildings-2.svg";
import deals from "../../assets/icons/svg icons/vuesax/bulk/dollar-square.svg";
import documents from "../../assets/icons/svg icons/vuesax/bulk/document-text.svg";
import inbox from "../../assets/icons/svg icons/vuesax/bulk/direct-inbox.svg";
import calender from "../../assets/icons/svg icons/vuesax/bulk/calendar.svg";
import history from "../../assets/icons/svg icons/vuesax/bulk/timer.svg";
import reports from "../../assets/icons/svg icons/vuesax/bulk/diagram.svg";
import automation from "../../assets/icons/svg icons/vuesax/bulk/unlimited.svg";
import archive from "../../assets/icons/svg icons/vuesax/bulk/strongbox.svg";

const NavItems = () => {
  const items = [
    {
      id: 0,
      name: "Home",
      iconName: home,
    },
    {
      id: 1,
      name: "Contacts",
      iconName: contacts,
    },
 
    {
      id: 11,
      name: "Leads-Management",
      iconName: documents,
    },
    {
      id: 3,
      name: "Deals",
      iconName: deals,
    },

    {
      id: 5,
      name: "Inbox",
      iconName: inbox,
    },
    {
      id: 6,
      name: "Calender",
      iconName: calender,
    },

    {
      id: 8,
      name: "Reports",
      iconName: reports,
    },

    

  ];
  return (
    <nav>
      <ul className="nav-list">
        {items.map((item) => (
          <NavItem
            key={item.id}
            itemName={item.name.toLowerCase()}
            iconName={item.iconName}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;
