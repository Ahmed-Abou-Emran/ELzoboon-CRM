import React, { useState } from "react";
import "./ContactsDetails.css";
import ContactForm from "./ContactForm";
import ContactTimeline from "./ContactTimeline";
import ContactItem from "../components/contacts/ContactItem";
import { useDispatch, useSelector } from "react-redux";
const id = 12532;
const url = `https://wwp6c.localtonet.com/api/getmldata/${id}`;

const ContactsDetails = () => {
  const currentContactData = useSelector((state) => state.currentContactData);
  const isAdding = useSelector((state) => state.isAdding);

  const dispatch = useDispatch();
  const disableEditingHandler = () => dispatch({ type: "disableEditing" });

  const [currentTab, setCurrentTab] = useState(0);
  const tabs = {
    details: 0,
    timeline: 1,
  };

  const AddingForm = currentTab === tabs.details && isAdding && (
    <ContactForm currentContactData={{}} />
  );

  const UpdatingForm = currentTab === tabs.details && !isAdding && (
    <ContactForm currentContactData={currentContactData} />
  );

  const Timeline = currentTab === tabs.timeline && <ContactTimeline />;

  return (
    <>
      {!isAdding && (
        <ContactItem
          key={currentContactData.id}
          id={currentContactData.id}
          firstName={currentContactData.firstName}
          middleName={currentContactData.middleName}
          title={currentContactData.title}
          company={currentContactData.company}
          type={currentContactData.type}
          leadScore={currentContactData.leadScore}
          prefix={currentContactData.prefix}
          segementType={currentContactData.segementType}
          recency={currentContactData.recency}
          monetary={currentContactData.monetary}
          label={currentContactData.label}
          frequency={currentContactData.frequency}
        />
      )}
      {!isAdding && (
        <nav className="right-navigation">
          <button
            onClick={() => {
              setCurrentTab(tabs.details);
            }}
            className={"btn" + (!currentTab ? " active" : "")}
          >
            details
          </button>

          <button
            onClick={() => {
              setCurrentTab(tabs.timeline);
            }}
            className={"btn" + (currentTab ? " active" : "")}
          >
            timeline
          </button>
        </nav>
      )}

      {AddingForm}
      {UpdatingForm}
      {Timeline}

      <button
        className="btn negative close"
        onClick={disableEditingHandler}
        tybe="button"
      >
        X
      </button>
    </>
  );
};

export default ContactsDetails;
