import React, { useState } from "react";
import { IoMdKey } from "react-icons/io";
import { FaChromecast } from "react-icons/fa";
import { Switch } from "antd";
import Alert from "../Alert/Alert";
import "./Security.css";

const Security = ({ handleChange, handleAlert }) => {
  const [toggle, setToggle] = useState(false);
  const [alert, setAlert] = useState({ show: false });
  const [render, setRender] = useState({ show: true });

  const handlePhoneChange = e => {
    handleAlert({
      text: "Enter the security code sent to XXXX-XXX:000"
    });
  };

  const add = () => {
    handlePhoneChange();
    setRender({ show: false });
  };

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className="row">
      {alert.show && <Alert text={alert.text} />}
      <h3 className="heading">Security</h3>
      <hr />
      <div className="wrapperSecurity">
        <div className="labelAlign">
          <IoMdKey size={30} />
          &nbsp; &nbsp; &nbsp; &nbsp;
          <label className="password" htmlFor="Password">
            Change Password
          </label>
        </div>
        <div className="changeBtn">
          <button onClick={handleChange} className="change-btn">
            Change
          </button>
        </div>
        <div className="labelAlign labelAuth">
          <FaChromecast size={30} />
          &nbsp; &nbsp; &nbsp; &nbsp;
          <label htmlFor="Authentication">Two-Factor Authentication</label>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
          &nbsp; &nbsp;
        </div>
        <div className="switchbtn">
          <Switch onClick={toggler} />
        </div>
        {toggle === true ? (
          render.show === true ? (
            <>
              <div className="displayLabel">
                <div className="phoneLabel">
                  <label htmlFor="Phone">Enter your Phone Number</label>
                </div>
                <div className="inputLabel">
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    name="Phone Number"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="submitBtn">
                <button onClick={add} type="button" className="btn-toggle">
                  Submit
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="displayLabel">
                <div className="phoneLabel">
                  <label htmlFor="code">Enter Security Code</label>
                </div>
                <div className="inputLabel">
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    name="Code"
                    placeholder="Code"
                  />
                </div>
              </div>
              <div className="submitBtn">
                <button onClick={add} type="button" className="btn-toggle">
                  Submit
                </button>
              </div>
            </>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Security;
