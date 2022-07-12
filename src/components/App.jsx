import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  // Version 1
  // function handleEvent(event) {
  //   setContact({ ...contact, [event.target.name]: event.target.value });
  // }

  // Version 2
  function handleEvent(event) {
    const { value, name } = event.target;
    setContact(function (previousValue) {
      if (name === "fName") {
        return {
          fName: value,
          lName: previousValue.lName,
          email: previousValue.email
        };
      } else if (name === "lName") {
        return {
          fName: previousValue.fName,
          lName: value,
          email: previousValue.email
        };
      } else {
        return {
          fName: previousValue.fName,
          lName: previousValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          onChange={handleEvent}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          onChange={handleEvent}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleEvent}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
