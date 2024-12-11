
import React from "react";
import Form from "./Form";

var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      <Form
      UserIsLoggedIn= {isLoggedIn}/>
    </div>
  );
}

export default App;
