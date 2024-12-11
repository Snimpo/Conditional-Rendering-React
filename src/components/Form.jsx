import React from "react";
var isLoggedIn = true;

function Form() {
  return (
    <>
      <div>
        {isLoggedIn ? (
          <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        ) : (
          <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Register</button>
          </form>
        )}
      </div>
    </>
  );
}

export default Form;
