import "./ContactItem.css";
import Card from "../../UI/Card";

import { useDispatch, useSelector } from "react-redux";
import { findSegementType, findSegementClass } from "./helpers";

const ContactItem = (props) => {
  const fullName = ` ${props?.firstName} ${props?.middleName}`;

  const segementType = findSegementType(props?.label);
  const findTypeClass = (type) => {
    switch (type) {
      case "Lead":
        return "lead";
      case "Client":
        return "client";
      default:
        return "";
    }
  };

  // const onSelectedHandler = (event) => {
  //   // const id = event.target.id;
  //   console.log("hello from the handler");
  // };

  const currentContactID = useSelector((state) => state.currentContactID);
  const dispatch = useDispatch();
  const setCurrentContactID = (id) => {
    dispatch({ type: "setCurrentContactID", contactID: id });
  };

  const setCurrentContactData = (currentContactData) => {
    dispatch({
      type: "setCurrentContactData",
      contactData: currentContactData,
    });
  };
  const onClickHandler = () => {
    setCurrentContactID(props.customerID);
    setCurrentContactData({ ...props });
    console.log({ ...props });
  };

  const contactImage = (
    <img
      src={`https://api.multiavatar.com/${props.firstName}hello}.png?random=1SJEItzLKpAGnW`}
      alt="Contact"
    />
  );

  return (
    <Card
      clickHandler={onClickHandler}
      className={
        "contact-item" +
        (props.customerID === currentContactID ? " active" : "")
      }
    >
      <div className="contact-data">
        <div className="personal-data">
          <div className="contact-image">{contactImage}</div>
          <div className="contact-description">
            {props?.prefix && (
              <div className="contact-name">
                <strong>
                  {props?.prefix}. {fullName}
                </strong>
              </div>
            )}
            {props?.prefix && (
              <div className="contact-job">
                {props?.title} at <strong>{props?.company}</strong>.
              </div>
            )}
          </div>
        </div>
        <div className="purchase-details">
          {!!!props?.recency && <div className="message">No Purchase Data</div>}
          {props?.recency && (
            <div>
              <strong>last purchase</strong>: {props?.recency} days ago
            </div>
          )}
          {props?.monetary && (
            <div>
              <strong>Total Money Spent</strong>: {props?.monetary}£
            </div>
          )}
          {props?.frequency && (
            <div>
              <strong>Puchase frequency</strong>: {props?.frequency} times
            </div>
          )}
        </div>
      </div>
      <div className={"type " + findTypeClass(props?.type)}>{props?.type}</div>

      <div className="labels">
        {props?.leadScore && (
          <div className="leadScore">{props?.leadScore} points</div>
        )}
        {segementType && (
          <div className={"segementType " + findSegementClass(segementType)}>
            {segementType}
          </div>
        )}

        {!segementType && (
          <div className="segementType unlabeled"> UnLabeld</div>
        )}
      </div>
    </Card>
  );
};

export default ContactItem;
