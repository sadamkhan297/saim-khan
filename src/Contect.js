import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Contect = () => {
  const [showAnim, setShowAnim] = useState(false);
  const [submitButton, setSubmitButton] = useState([]);
  const [FormInput, setFormInput] = useState({
    name: "",
    gmail: "",
    password: "",
    msg: "",
  });
  const { name, gmail, password, msg } = FormInput;

  const handleAnimation = () => {
    setShowAnim(!showAnim);
  };

  const FormChngeEvent = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...FormInput,
      [name]: value,
    });
  };

  const SubmitFormEvent = (event) => {
    event.preventDefault();
    if (name === "" && gmail === "" && password === "" && msg === "") {
    } else {
      setSubmitButton((oldVal) => {
        return [...oldVal, FormInput];
      });
      console.log(submitButton);
      setFormInput({
        name: "",
        gmail: "",
        password: "",
        msg: "",
      });
    }
  };
  return (
    <div className="contectPage">
      <NavLink
        className="contectBTN"
        to="#"
        activeClassName="active-link"
        onClick={handleAnimation}
      >
        Click Here To Contect Admin
      </NavLink>
      <div className="contect-container">
        <div className={showAnim ? "contect-centerDiv" : "formAnimation"}>
          <form
            onSubmit={SubmitFormEvent}
            className={showAnim ? "formDiv" : "formAnimation2"}
            action=""
          >
            <div className="form1">
              <label className="formLabel" htmlFor="name">
                Name
              </label>
              <input
                className="formInput"
                type="text"
                placeholder="Enter your name"
                onChange={FormChngeEvent}
                name="name"
                value={name}
              />
            </div>
            <div className="form1">
              <label className="formLabel" htmlFor="gmail">
                Mail
              </label>
              <input
                className="formInput"
                type="gmail"
                placeholder="Enter your email address"
                onChange={FormChngeEvent}
                name="gmail"
                value={gmail}
              />
            </div>
            <div className="form1">
              <label className="formLabel" htmlFor="password">
                Password
              </label>
              <input
                className="formInput"
                type="password"
                placeholder="Enter your password"
                onChange={FormChngeEvent}
                name="password"
                value={password}
              />
            </div>
            <div className="form1">
              <label className="formLabel" htmlFor="message">
                Message
              </label>
              <textarea
                className="formInput"
                name=""
                id=""
                cols="30"
                rows="10"
                onChange={FormChngeEvent}
                name="msg"
                value={msg}
              ></textarea>
            </div>
            <button className="FormBtn" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contect;
