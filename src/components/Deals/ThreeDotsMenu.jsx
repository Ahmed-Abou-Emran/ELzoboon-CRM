import React from "react";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MenuContainer = styled.div`
  z-index: 1;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #e4e9f7;
    li {
      width: 100%;
      font-size: 1rem;
      cursor: pointer;
      padding: 0.3rem;
      &:hover {
        background-color: #bcc9eb;
      }
    }
  }
`;

const Menu = ({ handleDelete }) => {
  const handleItemClick = (item) => {
    if (item === "Delete") {
      handleDelete();
    }
    console.log("Menu item clicked:", item);
  };

  return (
    <MenuContainer>
      <ul>
        <li onClick={() => handleItemClick("Edit")}>Edit</li>
        <li onClick={() => handleItemClick("Delete")}>Delete</li>
      </ul>
    </MenuContainer>
  );
};

const ThreeDotsMenu = ({ handleDelete }) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <div className="dots" onClick={handleMenuToggle}>
        <BsThreeDots size={15} />
      </div>
      {isMenuOpen && <Menu handleDelete={handleDelete} />}
    </Container>
  );
};

export default ThreeDotsMenu;
