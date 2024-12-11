import React from "react";



function Form(prop) {
  return (
    <>
      <div>
        {prop.UserIsLoggedIn ? (
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
