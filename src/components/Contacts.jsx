import React, { useState, useEffect } from "react";
import ContactList from "./ContactsList";
import ContactForm from "./ContactForm";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <>
      <ContactList />
      <ContactForm addContacts={setContacts} contacts={contacts} />
    </>
  );
}
export default Contacts;
