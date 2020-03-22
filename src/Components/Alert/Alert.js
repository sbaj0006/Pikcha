import React from "react";
import "./Alert.css";

const Alert = ({ text }) => {
  return <div className="alert-success">{text}</div>;
};

export default Alert;
