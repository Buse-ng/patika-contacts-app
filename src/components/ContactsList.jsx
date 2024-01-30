import React, { useState } from "react";

const ContactList = ({ contacts }) => {

  const [filterContact, setFilterContact] = useState("");
    
  const filtered = contacts.filter((item) => {
      return Object.keys(item).some(key => 
        item[key]
        .toString()
        .toLowerCase()
        .includes(filterContact.toLowerCase()
      ));
  })

  return (
    <div className="text-red-500">

      <input 
        placeholder="Filter Contact"
        value={filterContact}
        onChange={ (e) => setFilterContact(e.target.value)}
      />

      <ul>
        {filtered.map((contact, index) => (
          <li key={index}>{contact.fullname}</li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;