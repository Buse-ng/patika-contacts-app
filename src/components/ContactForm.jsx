import React, {useEffect, useState} from "react";

const initialFormValues = { fullname: "", phoneNumber: "" };

const ContactForm = ({addContacts, contacts}) => {
    const [form, setForm] = useState( initialFormValues );

    // Effect to reset the form when contacts change
    useEffect(() => {
      setForm(initialFormValues)
    }, [contacts])
    
    const onChangeInput = (e) => {
      setForm({...form, [e.target.name]: e.target.value });
    }
    
    const onSubmit = (e) => {
      e.preventDefault();
      if(form.fullname === ""  || form.phoneNumber === ""){
        return false;
      }
      addContacts([...contacts, form]);
    }

  return (
    <form 
        onSubmit={onSubmit}
        className="flex flex-col justify-center items-center gap-y-6"
    >
      <div className="mt-6">
        <input 
            name="fullname" 
            placeholder="Fullname" 
            value={form.fullname}
            onChange={onChangeInput}
        />
      </div>
      
      <div>
        <input 
            name="phoneNumber" 
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={onChangeInput}
        />
      </div>

      <div className="bg-gray-300">
        <button>Add</button>
      </div>
    </form>
  );
};
export default ContactForm;
