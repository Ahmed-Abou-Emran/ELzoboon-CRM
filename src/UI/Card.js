import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + (props.className || "");
  return (
    <div onClick={props.clickHandler} className={classes}>
      {props.children}
    </div>
  );
};

export default Card;
