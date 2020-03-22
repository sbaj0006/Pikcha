import React from "react";
import "./Email.css";

const Email = ({ handleRadioChange }) => {
  return (
    <>
      <div className="row">
        <h3>Email Preferences</h3>
        <hr />
        <div className="wrapperEmail">
          <div className="middle">
            <label htmlFor="coupons" className="radio">
              <input
                type="radio"
                name="coupons"
                id="coupons"
                className="radio__input"
              />
              <div className="radio__radio"></div>
              Coupons and Promotions
            </label>
          </div>
          <div className="middle">
            <label htmlFor="artist" className="radio">
              <input
                type="radio"
                name="artist"
                id="artist"
                className="radio__input"
              />
              <div className="radio__radio"></div>
              Artist News
            </label>
          </div>
          <div className="middle">
            <label htmlFor="pikcha" className="radio">
              <input
                type="radio"
                name="pikcha"
                id="pikcha"
                className="radio__input"
              />
              <div className="radio__radio"></div>
              Pikcha Blog Posts
            </label>
          </div>
          <div className="middle">
            <label htmlFor="prizes" className="radio">
              <input
                type="radio"
                name="prizes"
                id="prizes"
                className="radio__input"
              />
              <div className="radio__radio"></div>
              Competitions and Prizes
            </label>
          </div>
          <div className="box5Email">
            <button
              onClick={handleRadioChange}
              className="submit-btn-radio "
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
