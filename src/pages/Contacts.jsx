import "./Contacts.css";
import ContactsList from "../components/contacts/ContactsList";
import ContactForm from "./ContactForm";
import NoContacts from "./NoContacts";
import Card from "../UI/Card";
import { useSelector, useDispatch } from "react-redux";
import userAdd from "../assets/icons/svg icons/vuesax/bulk/user-add.svg";
import search from "../assets/icons/svg icons/vuesax/bulk/search-normal.svg";
import ContactsDetails from "./CotactsDetails";
import { Toaster } from "react-hot-toast";

import MultiSelect from "../UI/MultiSelect";

const Contacts = () => {
  fetch("http://backendelzoboon.hopto.org/");
  const isEditing = useSelector((state) => state.isEditing);
  const filterQuery = useSelector((state) => state.filterQuery);

  const dispatch = useDispatch();

  const onAddHadler = () => {
    dispatch({ type: "enableEditing" });
    dispatch({ type: "setCurrentContactID", contactID: null });
    dispatch({ type: "addingContact" });
    dispatch({ type: "setBaseURL" });
  };
  // const ContactView =  ({isEditing && <ContactForm />} | {!isEditing && <NoContacts />})
  // const [contacts, setContacts] = useState(DUMMY_Contacts);

  // filter options
  const selectItems = [
    { option: "Punctual customers", value: "0" },
    { option: "Hibernating customers", value: "1" },
    { option: "Exceptional customers", value: "2" },
    { option: "Recent customers", value: "3" },
  ];

  return (
    <div className="contacts">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      <div className="all-contacts">
        <div className="search-bar">
          <button className="search">
            <img src={search} alt="search" />
          </button>
          <input type="text" placeholder="Search..." />
        </div>
        <Card className="control-actions">
          {/* <img src={userAdd} alt="add contact" /> */}
          <button className="btn positive" onClick={onAddHadler}>
            Add Contact
          </button>

          <MultiSelect name="Select Filter" selectItems={selectItems} />
        </Card>
        <div className="selectedFilters">
          {filterQuery.item0 > 0 && (
            <div className="segementType punctualCustomers">
              Punctual Customers
            </div>
          )}
          {filterQuery.item1 > 0 && (
            <div className="segementType hibernatingCustomers">
              Hibernating Customers
            </div>
          )}
          {filterQuery.item2 > 0 && (
            <div className="segementType exceptionalCustomers">
              Exceptional Customers
            </div>
          )}
          {filterQuery.item3 > 0 && (
            <div className="segementType recentCustomers">Recent Customers</div>
          )}
        </div>
        <ContactsList />
      </div>

      <div className="contact-view">
        {/* <Route path="/contacts/:contactID" element={<Contacts />}></Route>; */}
        {isEditing && <ContactsDetails />}
        {!isEditing && <NoContacts />}
      </div>
    </div>
  );
};

export default Contacts;
