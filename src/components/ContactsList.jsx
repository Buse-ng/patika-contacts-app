import React from 'react';

const ContactList = ({contacts}) => {
    
    return(
        <div className='bg-red-500'>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                         {contact.fullname}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ContactList;