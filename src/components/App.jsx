import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="data:image/png;base64,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" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
