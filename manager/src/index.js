import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import Chart from "./Pages/Chart";
import Income from "./Pages/Income";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";
import { AuthProvider } from "./Context/AuthContext";
import SideBarAuth from "./Components/SideBarAuth";
import PrivateRoute from "./Secure/PrivateRoute";
import PrivateRoute2 from "./Secure/PrivateRoute2";
import ForgotPassword from "./Pages/ForgotPassword";
import UpdateProfile from "./Pages/UpdateProfile";
import Tracking from "./Pages/Expenses/Tracking";
import Budget from "./Pages/SpendingPlan/Budget"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AuthProvider>
			<Router>
				<SideBarAuth />
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/tracking" element={<PrivateRoute> <Tracking/> </PrivateRoute>} />
					<Route path="/budget" element={<PrivateRoute> <Budget/> </PrivateRoute>} />
					<Route path="/chart" element={<Chart />} />
					<Route path="/income" element={<Income />} />
					<Route path="/" element={<PrivateRoute2> <Profile/> </PrivateRoute2>} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/signup" element={<PrivateRoute2> <Signup/> </PrivateRoute2>} />
					<Route path="/updateProfile" element={<PrivateRoute> <Account/> </PrivateRoute>} />
					<Route path="/update-Profile" element={<PrivateRoute> <UpdateProfile/> </PrivateRoute>} />
					<Route path="/forgot-password" element={<PrivateRoute2> <ForgotPassword/> </PrivateRoute2>} />


				</Routes>
			</Router>
		</AuthProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
