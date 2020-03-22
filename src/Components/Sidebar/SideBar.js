import React from "react";
import "./Sidebar.css";

const SideBar = () => {
  return (
    <div className="card">
      <div className="container">
        <h4>Your Account</h4>
        <hr />
        <p>Details</p>
        <p>Collection</p>
        <p>Images</p>
        <p>My Sales</p>
        <p>Payment Details</p>
        <p className="bold">Settings</p>
      </div>
    </div>
  );
};

export default SideBar;
