import "./TransactionItem.css";
import Card from "../../UI/Card";
const TransactionItem = (props) => {
  let date = props.invoiceDate
    .toLocaleString("en-US", { hour12: false })
    .replace(",", " ");
  date = date.replaceAll("/", "-");

  return (
    <Card className="transaction-item">
      <div className="transaction-description">{props.description}</div>
      <div className="unit-price">{props.unitPrice}$</div>
      <div className="quantity">{props.quantity}</div>
      <div className="total">{props.total.toFixed(2)}$</div>
      <div className="invoice-date">{date}</div>
    </Card>
  );
};

export default TransactionItem;
