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
    <div className="text-gray-500">
      <input 
        placeholder="Filter Contact"
        value={filterContact}
        onChange={ (e) => setFilterContact(e.target.value)}
        className="p-1.5 rounded-md my-6"
      />

      <ul>
        {filtered.map((contact, index) => (
          <li 
            key={index}
            className="my-2 bg-amber-200 px-2 rounded-md flex justify-between"
          >
            <span>
              {contact.fullname}
            </span>
            <span>
              {contact.phoneNumber}
            </span>
          </li>
        ))}
      </ul>
      
      <p className="tracking-wide font-semibold">
        Contacts List ({filtered.length})
      </p>
    </div>
  );
};
export default ContactList;
