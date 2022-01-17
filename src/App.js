import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Content from './pages/contentmanagement/ContentManagement';
import EligilityCheck from './pages/eligibilitycheck/Eligibilitycheck';
import PolicyInquiry from './pages/policyenquiry/Policyinquiry';
import QuickQuoteSubmission from './pages/quickquotesubmission/Quickquotesubmission';
import Navbar from './components/Navbar/Navbar';
import SideNavbar from './components/Navbar/SideNavbar';
import FNOL from './pages/fnol/fnol';

const App = () => {
	return (
		<Router>
			<Navbar />
			<SideNavbar />
			<main>
				<Switch>
					<Route path="/policyinquiry" exact>
						<PolicyInquiry />
					</Route>
					<Route path="/contentmanagement" exact>
						<Content />
					</Route>
					<Route path="/eligilitycheck" exact>
						<EligilityCheck />
					</Route>
					<Route path="/quickquotesubmission" exact>
						<QuickQuoteSubmission />
					</Route>
					<Route path="/fnol" exact>
						<FNOL />
					</Route>
					
				</Switch>
			</main>
		</Router>
	);
};

export default App;
