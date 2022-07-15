import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./components/pages/Home";
import AddUser from "./components/users/AddUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";

function App() {
	return (
		<div>
			<Router basename={window.location.pathname || ''}>
					
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/users/edit/:id" element={<EditUser />} />
					<Route exact path="/users/:id" element={<User />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
