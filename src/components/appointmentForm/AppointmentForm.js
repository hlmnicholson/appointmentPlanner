import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Contact Picker
        <ContactPicker
          name="contact" 
          value={contact}
          contacts={getContactNames()} 
          onChange={((e) => setContact(e.target.value))}
          placeholder="Appointment with"
        />
      </label>
      <label>
        Title:
        <input 
          type="text"
          name="title" 
          value={title} 
          onChange={((e) => setTitle(e.target.value))}
          placeholder="Nature of appointment"
        />
      </label>
      <label>
        Date:
        <input 
          type="date"
          name="date" 
          min={getTodayString()}
          value={date} 
          onChange={((e) => setDate(e.target.value))} 
          required
        />
      </label>
      <label>
        Time:
        <input 
          type="time" 
          name="time"
          value={time} 
          onChange={((e) => setTime(e.target.value))} 
          required
        />
      </label>
      <input 
        type="submit" 
        value="Submit" 
      />
    </form>
  );
};
