import React, { useState } from "react";

function HooksForm(props) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    var myWindow = window.open();
    myWindow.alert(` Username: ${name}, Password: ${pass} `);
    myWindow.document.write(`<p> Username: ${name}, Password: ${pass}</p> `);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
        </label>
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={pass}
          onChange={(evt) => setPass(evt.target.value)}
        />
      </div>
      <div>
      <button type="submit">HookSubmit</button>
      </div>
      {/* <input type="submit" value="Submit" /> */}
    </form>
  );
}
export default HooksForm;
