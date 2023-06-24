import "../pages/NoContacts.css";
import Card from "../UI/Card";
import contactFrame from "..//assets/icons/contact-frame.svg";
import tagUser from "..//assets/icons/tag-user.svg";
import hand from "..//assets/icons/path.svg";

const NoContacts = () => {
  return (
    <Card className="no-contacts">
      <img src={tagUser} alt="user tag" />
      <h1>Click on a contact to view or edit</h1>
      <img src={contactFrame} alt="contact frame" />
      <img className="hand" src={hand} alt="hand" />
    </Card>
  );
};

export default NoContacts;
