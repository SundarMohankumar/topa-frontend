import React from 'react';
import './ECheck.css';

const EligibilityCheck = () => {
	return (
		<div className="eCheck">
			<form id="in-screen">
				<div>
					<label>First Name</label>
					<input type="name" name="name" />
				</div>
				<div>
					<label>Middle Name</label>
					<input type="name" name="name" />
				</div>
				<div>
					<label>Last Name</label>
					<input type="name" name="name" />
				</div>
				<div>
					<label>DOB</label>
					<input type="dob" name="dob" />
				</div>
				<div>
					<label>Address</label>
					<input type="address" name="address" />
				</div>
				<div>
					<label>City</label>
					<input type="city" name="city" />
				</div>
				<div>
					<label>State</label>
					<input type="state" name="state" />
				</div>

				<div>
					<label>Zip</label>
					<input type="zip" name="zip" />
				</div>
				<div>
					<button>CHECK ELIGIBILITY</button>
				</div>
			</form>
		</div>
	);
};

export default EligibilityCheck;
