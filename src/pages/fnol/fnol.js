import React from 'react';

import './bootstrap/bootstrap.min.css';

import './fnol.css'

export default function FNOL() {
	return(
		<div>
		<form className="Parent">
		  <div className="Box">
  
		  <label className='abc'>
							  Policy No / Zip Code: <input type="text" name="Policy" />{' '}
						  </label>
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
  
  
  
			<div id="boxes">
			  <div id="leftbox">
				<label className="borderText1">Claimant Details</label>
				<label className="boxdata1">Claimant Name:</label><br />
				<label className="boxdata">Claimant Type:</label><br />
				<label className="boxdata">Claimant Address:</label>
			  </div>
  
			  <div id="rightbox">
				<label className="borderText2">Loss Location Details </label>
				<label className="boxdata1">Property Damage Location:</label><br />
				<label className="boxdata">Address:</label><br />
				<label className="boxdata">City:</label><br />
				<label className="boxdata">State:</label><br />
				<label className="boxdata">Country:</label>
			  </div>
			</div>
  
  
	   
			</form>
		  </div>
  
			);
		}
		
		
	