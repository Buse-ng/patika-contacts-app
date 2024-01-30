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
      <div className="w-[400px] p-5 bg-blue-200 rounded-lg">
        <h2 className="font-bold text-2xl mb-4 tracking-wide text-gray-500">
          Contacts
        </h2>
        <ContactForm addContacts={setContacts} contacts={contacts} />
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}
export default Contacts;
