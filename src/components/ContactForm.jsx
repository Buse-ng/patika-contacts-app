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
        className="flex flex-col gap-y-6"
    >
      <div className="">
        <input
          name="fullname" 
          placeholder="Full Name" 
          value={form.fullname}
          onChange={onChangeInput}
          className="w-full box-border p-2 rounded-lg"
        />
      </div>
      
      <div>
        <input 
            name="phoneNumber" 
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={onChangeInput}
            className="w-full box-border p-2 rounded-lg"
        />
      </div>

      <button className="bg-amber-300 hover:bg-orange-300 cursor-pointer rounded-lg p-1 w-28 font-semibold text-gray-500 hover:text-slate-500">Add</button>
    </form>
  );
};
export default ContactForm;
