import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [ contacts, setContact ] = useState([]);
  const [ appointments, setAppointment ] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  function addContact(name, phone, email) {
   const newContact = {
    name: name,
    phone: phone,
    email: email,
   }
    setContact((prev) => [...prev, newContact]);
 }

  function addAppointment(title, contact, date, time) {
  const newAppoinment = {
    title: title,
    contact: contact,
    date: date,
    time: time,
  }
    setAppointment((prev) => [...prev, newAppoinment]);
}

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
              contacts={contacts} 
              addContact={addContact} 
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
              appointments={appointments} 
              contacts={contacts} 
              addAppointment={addAppointment} 
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
