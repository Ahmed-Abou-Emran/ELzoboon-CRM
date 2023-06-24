import "./SelectItem.css";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SelectItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  const currentfilterQuery = useSelector((state) => state.filterQuery);

  const dispach = useDispatch();
  const currentItem = `item${props.value}`;

  useEffect(() => {
    if (isChecked) {
      dispach({
        type: "setFilterQuery",
        changedItem: { [currentItem]: 1 },
      });
    } else {
      dispach({
        type: "setFilterQuery",
        changedItem: { [currentItem]: 0 },
      });
    }
  }, [isChecked]);

  console.log(currentfilterQuery);
  return (
    <li onClick={checkHandler} class={"item" + (isChecked ? " checked" : "")}>
      <span class="checkbox">
        <i class="fa-solid fa-check check-icon"></i>
      </span>
      <span class="item-text">{props.option}</span>
    </li>
  );
};

export default SelectItem;
