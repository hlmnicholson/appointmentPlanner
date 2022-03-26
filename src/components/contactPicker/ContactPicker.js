import React from "react";

export const ContactPicker = ({ name, contacts, onChange }) => {
  return (
    <select name={name} onChange={onChange} defaultValue={'DEFAULT'}>
      <option key={-1} value='DEFAULT' disabled>
        Please choose an option
      </option>
      {contacts.map((contact) => <option value={contact} key={contact}>
        {contact}
      </option>
      )}
    </select>
  );
};
