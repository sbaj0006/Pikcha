import React, { useState } from "react";
import SideBar from "../Components/Sidebar/SideBar";
import Security from "../Components/Security/Security";
import Alert from "../Components/Alert/Alert";
import Email from "../Components/Email/Email";

const Home = () => {
  const [alert, setAlert] = useState({ show: false });

  const handleChange = e => {
    handleAlert({ text: "We have sent you a link to change your password" });
  };

  const handleRadioChange = e => {
    handleAlert({ text: "Email Settings Saved" });
  };

  const handleAlert = ({ text }) => {
    setAlert({ show: true, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  return (
    <>
      {alert.show && <Alert text={alert.text} />}
      &nbsp; &nbsp; &nbsp; &nbsp;
      <div className="wrapperGrid">
        <div className="box1">
          <SideBar />
        </div>
        <div className="box2">
          <Security handleChange={handleChange} handleAlert={handleAlert} />
        </div>
        <div className="box3">
          <Email handleRadioChange={handleRadioChange} />
        </div>
      </div>
    </>
  );
};

export default Home;
