import React from 'react';
import './SideNav.css';

function QuickQuoteSubmission() {
	return (
		<div className="body">
			<div className="body1">
				<form>
					<label>First Name :</label>
					<input type="text" name="firstname" /> <br />
					<label>Middle Name :</label>
					<input type="text" name="middlename" /> <br />
					<label>Last Name :</label>
					<input type="text" name="lastname" /> <br />
					<label>DOB :</label>
					<input type="text" name="dob" /> <br />
					<label>Address :</label>
					<input type="text" name="address" /> <br />
					<label>City :</label>
					<input type="text" name="city" /> <br />
					<label>State :</label>
					<input type="text" name="state" /> <br />
					<label>Zip :</label>
					<input type="text" name="zip" /> <br />
					<button type="submit">SUBMIT TO RATER</button>
				</form>
			</div>

			<div className="body2">
				<div className="box1">
					<div className="heading1">
						<label>RATE DETAILS</label>
					</div>
					<label>Premium Details: </label>
					<input type="text" name="Premium Details" /> <br />
					<label>Coverage Details:</label>
					<input type="text" name="Coverage Details" /> <br />
					<button type="submit">SUBMIT TO CARRIER</button>
				</div>
				<div className="box2">
					<div className="heading2">
						<label>QUOTE DETAILS</label>
					</div>
					<label>Quote Number: </label>
					<input type="text" name="Quote Number" /> <br />
					<label>Coverage Details:</label>
					<input type="text" name="Coverage Details" /> <br />
					<button type="submit">SUBMIT TO QOUTE</button>
				</div>
			</div>
		</div>
	);
}
export default QuickQuoteSubmission;
