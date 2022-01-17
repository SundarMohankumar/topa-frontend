import React from "react";
import './policyinquire.css';

const para = {
  padding: '60px 60px',

};

const PolicyInquiry = () => {
  return (

      <div>
      <form className="Parent">
        <div className="Box">

          <label className="abc">Policy No</label>
          <button className="abc">Search</button>
          <label className="abc">Policy Status:</label>
        </div>

          <div id="boxes">
            <div id="leftbox">
              <label className="borderText1"> Policy Details </label>
              <label className="boxdata1">Policy Number:</label><br />
              <label className="boxdata">Policy Status:</label><br />
              <label className="boxdata">Insured Name:</label><br />
              <label className="boxdata">Insured Details:</label>
            </div>

            <div id="rightbox">
              <label className="borderText2"> Claim Details </label>
              <label className="boxdata1">Risk Details:</label><br />
              <label className="boxdata">Loss Type:</label><br />
              <label className="boxdata">Loss Date:</label><br />
              <label className="boxdata">Reported By:</label><br />
              <label className="boxdata">Reported To:</label>
            </div>
          </div>

          <div className="xyz">
            <input className="inputText" type="text" />
            <button className="browse" type="submit">Browse</button>
            <button className="fileupload" type="submit">File Upload</button>
          </div>
          </form>
        </div>


  );
}

export default PolicyInquiry;