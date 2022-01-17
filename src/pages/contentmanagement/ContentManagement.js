import React from 'react';
import './content.css';

function Content() {
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
			</form>
		</div>
	);
}

export default Content;
