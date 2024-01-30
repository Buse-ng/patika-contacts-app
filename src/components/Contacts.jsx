import React, { useState, useEffect } from "react";
import ContactList from "./ContactsList";
import ContactForm from "./ContactForm";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div>
      <ContactForm addContacts={setContacts} contacts={contacts} />
      <ContactList contacts={contacts} />
    </div>
  );
}
export default Contacts;
