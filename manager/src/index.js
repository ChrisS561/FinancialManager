import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";
import Tracking from "./Pages/Tracking";
import Budget from "./Pages/Budget";
import Chart from "./Pages/Chart";
import Income from "./Pages/Income";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Signup from "./Pages/Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
      <Sidebar />
			<Routes>
				<Route path="/home" element={<Home />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/income" element={<Income/>} />
        <Route path="/" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signup" element={<Signup />} />

			</Routes>
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
