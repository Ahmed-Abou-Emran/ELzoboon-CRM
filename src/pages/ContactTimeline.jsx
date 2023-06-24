import React, { useState, useEffect } from "react";
import "./ContactTimeline.css";
import Card from "../UI/Card";
import TransactionItem from "../components/contacts/TransactionItem";
import { useSelector } from "react-redux";

const dummy_details = [
  {
    id: 452200,
    invoiceNo: "575326",
    stockCode: "22340",
    description: "NOEL GARLAND PAINTED ZINC ",
    quantity: 24,
    invoiceDate: "11/9/2011 13:47",
    unitPrice: "0.39",
    customerID: 12532,
    country: "France",
    updated: null,
  },
  {
    id: 452201,
    invoiceNo: "575326",
    stockCode: "23313",
    description: "VINTAGE CHRISTMAS BUNTING",
    quantity: 5,
    invoiceDate: "11/9/2011 13:47",
    unitPrice: "4.95",
    customerID: 12532,
    country: "France",
    updated: null,
  },
  {
    id: 452202,
    invoiceNo: "575326",
    stockCode: "22910",
    description: "PAPER CHAIN KIT VINTAGE CHRISTMAS",
    quantity: 6,
    invoiceDate: "11/9/2011 13:47",
    unitPrice: "2.95",
    customerID: 12532,
    country: "France",
    updated: null,
  },
  {
    id: 452203,
    invoiceNo: "575326",
    stockCode: "22945",
    description: "CHRISTMAS METAL TAGS ASSORTED ",
    quantity: 12,
    invoiceDate: "11/9/2011 13:47",
    unitPrice: "0.85",
    customerID: 12532,
    country: "France",
    updated: null,
  },
  {
    id: 452204,
    invoiceNo: "575326",
    stockCode: "23082",
    description: "SET 6 PAPER TABLE LANTERN HEARTS ",
    quantity: 6,
    invoiceDate: "11/9/2011 13:47",
    unitPrice: "3.75",
    customerID: 12532,
    country: "France",
    updated: null,
  },
  {
    id: 452205,
    invoiceNo: "575326",
    stockCode: "23083",
    description: "SET 6 PAPER TABLE LANTERN STARS ",
    quantity: 12,
    invoiceDate: "11/9/2011 13:47",
    unitPrice: "3.75",
    customerID: 12532,
    country: "France",
    updated: null,
  },
  {
    id: 452206,
    invoiceNo: "575326",
    stockCode: "23318",
    description: "BOX OF 6 MINI VINTAGE CRACKERS",
    quantity: 12,
    invoiceDate: "11/9/2011 13:47",
    unitPrice: "2.49",
    customerID: 12532,
    country: "France",
    updated: null,
  },
  {
    id: 452207,
    invoiceNo: "575326",
    stockCode: "23319",
    description: "BOX OF 6 MINI 50'S CRACKERS",
    quantity: 6,
    invoiceDate: "11/9/2011 13:47",
    unitPrice: "2.49",
    customerID: 12532,
    country: "France",
    updated: null,
  },
  {
    id: 452208,
    invoiceNo: "575326",
    stockCode: "22076",
    description: "6 RIBBONS EMPIRE  ",
    quantity: 12,
    invoiceDate: "11/9/2011 13:47",
    unitPrice: "1.65",
    customerID: 12532,
    country: "France",
    updated: null,
  },
  {
    id: 452209,
    invoiceNo: "575326",
    stockCode: "21012",
    description: "ANTIQUE ALL GLASS CANDLESTICK",
    quantity: 6,
    invoiceDate: "11/9/2011 13:47",
    unitPrice: "2.10",
    customerID: 12532,
    country: "France",
    updated: null,
  },
  {
    id: 452210,
    invoiceNo: "575326",
    stockCode: "84946",
    description: "ANTIQUE SILVER T-LIGHT GLASS",
    quantity: 12,
    invoiceDate: "11/9/2011 13:47",
    unitPrice: "1.25",
    customerID: 12532,
    country: "France",
    updated: null,
  },
  {
    id: 452211,
    invoiceNo: "575326",
    stockCode: "23491",
    description: "VINTAGE JINGLE BELLS HEART",
    quantity: 2,
    invoiceDate: "11/9/2011 13:47",
    unitPrice: "8.25",
    customerID: 12532,
    country: "France",
    updated: null,
  },
  {
    id: 452212,
    invoiceNo: "575326",
    stockCode: "23439",
    description: "HAND WARMER RED LOVE HEART",
    quantity: 12,
    invoiceDate: "11/9/2011 13:47",
    unitPrice: "2.10",
    customerID: 12532,
    country: "France",
    updated: null,
  },
  {
    id: 452213,
    invoiceNo: "575326",
    stockCode: "22866",
    description: "HAND WARMER SCOTTY DOG DESIGN",
    quantity: 12,
    invoiceDate: "11/9/2011 13:47",
    unitPrice: "2.10",
    customerID: 12532,
    country: "France",
    updated: null,
  },
  {
    id: 452214,
    invoiceNo: "575326",
    stockCode: "22867",
    description: "HAND WARMER BIRD DESIGN",
    quantity: 12,
    invoiceDate: "11/9/2011 13:47",
    unitPrice: "2.10",
    customerID: 12532,
    country: "France",
    updated: null,
  },
  {
    id: 452215,
    invoiceNo: "575326",
    stockCode: "POST",
    description: "POSTAGE",
    quantity: 2,
    invoiceDate: "11/9/2011 13:47",
    unitPrice: "18.00",
    customerID: 12532,
    country: "France",
    updated: null,
  },
];

const ContactTimeline = () => {
  const baseURL = useSelector((state) => state.baseURL);
  const currentContactID = useSelector((state) => state.currentContactID);

  let timelineURL = `${baseURL}getmldata/${currentContactID}`;

  // const [contactTransactions, setContactTransactions] = useState(dummy_details);
  const [contactTransactions, setContactTransactions] = useState([]);

  async function fetchContactTransactions(url) {
    try {
      const response = await fetch(url);
      const contactTransactions = await response.json();
      setContactTransactions(contactTransactions);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchContactTransactions(timelineURL);
  }, [timelineURL]);

  const transacitonItems = contactTransactions.map((transaction) => (
    <TransactionItem
      key={transaction.id}
      customerID={transaction.customerID}
      description={transaction.description.toLocaleLowerCase()}
      unitPrice={transaction.unitPrice}
      quantity={transaction.quantity}
      total={transaction.unitPrice * transaction.quantity}
      invoiceDate={new Date(transaction.invoiceDate)}
    />
  ));
  return (
    <Card className="contact-timeline">
      {
        <div className="timeline-header">
          <div className="transaction-description">Description</div>
          <div className="unit-price">Unit Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
          <div className="date">Invocice Date</div>
        </div>
      }
      {!(contactTransactions.length > 0) && (
        <div className="message">No Transactions Found</div>
      )}
      <div>{transacitonItems}</div>
    </Card>
  );
};

export default ContactTimeline;
