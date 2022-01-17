import React from 'react';
import './SideNavBar.css';
import { NavLink } from 'react-router-dom';

const SideNavbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-mainbg">
			{/* <NavLink className="navbar-brand navbar-logo" to="/" exact>
                Web Solutions
            </NavLink> */}

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<i className="fas fa-bars text-white" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbars">
					<li className="nav-item">
						<NavLink className="nav-link" to="/fnol" exact>
							<i>FNOL</i>
						</NavLink>
					</li>

					<li className="nav-item">
						<NavLink className="nav-link" to="/policyinquiry" exact>
							<i>Policy Inquiry</i>
						</NavLink>
					</li>

					<li className="nav-item">
						<NavLink className="nav-link" to="/contentmanagement" exact>
							<i>Content Management</i>
						</NavLink>
					</li>

					<li className="nav-item">
						<NavLink className="nav-link" to="/eligilitycheck" exact>
							<i>Eligibility Check</i>
						</NavLink>
					</li>

					<li className="nav-item">
						<NavLink className="nav-link" to="/quickquotesubmission" exact>
							<i>Quick Quote Submission</i>
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default SideNavbar;
