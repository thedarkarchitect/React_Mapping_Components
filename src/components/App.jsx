import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      //a key must be given and it must be unique like an id
      //a KEY CAN BE A STRING O NUMBER BUT IT MUST BE UNIQUE TO EACH ARRAY ELEMENT
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* //This maps or uses the react map function to loop thru contacts and uses createcard function to tap in to elements */}
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
