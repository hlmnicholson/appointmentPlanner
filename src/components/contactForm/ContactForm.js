import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text"
          name="name" 
          value={name} 
          onChange={((e) => setName(e.target.value))}
          placeholder="Full name"
        />
      </label>
      <label>
        Phone:
        <input 
          type="tel"
          name="tel" 
          value={phone} 
          // regex is for US phone numbers
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" 
          onChange={((e) => setPhone(e.target.value))} 
          placeholder="Contact Phone (###-###-####)"
        />
      </label>
      <label>
        Email:
        <input 
          type="email" 
          name="email"
          value={email} 
          onChange={((e) => setEmail(e.target.value))} 
          placeholder = 'email@email.com'
        />
      </label>
      <input 
        type="submit" 
        value="Submit" 
      />
    </form>
    
  );
};
