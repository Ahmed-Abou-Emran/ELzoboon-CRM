import "./MultiSelect.css";
import { Fragment, useState } from "react";
import SelectItem from "./SelectItem";
import arrowDown from "../assets/icons/svg icons/vuesax/outline/arrow-down.svg";

// This component takes two props items, the name and this is the text that will be displayed on the button and the selectItems which is an array of objects that will be displayed in the dropdown list

const MultiSelect = (props) => {
  const [menueIsOpen, toggleMeneue] = useState(false);

  const clickHandler = () => {
    toggleMeneue(!menueIsOpen);
  };

  return (
    <div>
      <div
        onClick={clickHandler}
        class={"select-btn" + (menueIsOpen ? " open" : "")}
      >
        <span class="btn-text">{props.name}</span>
        <span class="arrow-dwn">
          <img src={arrowDown} alt="arrow" />
        </span>
      </div>

      <ul class="list-items">
        {props.selectItems.map((item) => (
          <SelectItem
            key={item.value}
            value={item.value}
            option={item.option}
          />
        ))}
      </ul>
    </div>
  );
};

export default MultiSelect;
