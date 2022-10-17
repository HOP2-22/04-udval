import "./App.css";
import React, { useRef, useState } from "react";
import { RenderTest } from "./components/comp";
import { InputTest } from "./components/input";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const focusName = useRef();
  const focusEmail = useRef();
  const focusPhone = useRef();
  const submit = (event) => {
    event.preventDefault();
    if (name === "") {
      focusName.current.focus();
      return;
    }
    if (email === "") {
      focusEmail.current.focus();
      return;
    }
    if (phone === "") {
      focusPhone.current.focus();
      return;
    }
    console.log({ name: name, email: email, phone: phone });
    alert("Submitted!");
  };
  return (
    <div className="container">
      <div className="signup">Sign Up</div>
      <div className="nameContainer">
        <div className="form__group field">
          <input
            ref={focusName}
            type="input"
            className="form__field"
            placeholder="John Doe"
            name="name"
            id="name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="name" className="form__label">
            Name
          </label>
        </div>
      </div>
      <div className="emailContainer">
        <div className="form__group field">
          <input
            ref={focusEmail}
            type="input"
            className="form__field"
            placeholder="johndoe@gmail.com"
            name="email"
            id="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="email" className="form__labelemail">
            Email
          </label>
        </div>
      </div>
      <div className="phoneContainer">
        <div className="form__group field">
          <input
            ref={focusPhone}
            type="input"
            className="form__field"
            placeholder="+976 89893264"
            name="phone"
            id="phone"
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <label htmlFor="email" className="form__labelemail">
            Phone Number
          </label>
        </div>
      </div>
      <button className="buttonSub" onClick={submit}>
        Submit
      </button>
      <RenderTest />
      <InputTest />
    </div>
  );
}

export default App;
