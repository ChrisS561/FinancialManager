import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Pages/PagesCSS/Profile.css";
import background from "../Images/Signup.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../Context/AuthContext";
import {FaGoogle} from "react-icons/fa"

export default function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login, signInWithGoogle } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			navigate("/home");
		} catch {
			setError("The password is invalid or the user does not have a password.");
		}
		setLoading(false);
	}

	const backgroundStyle = {
		backgroundImage: `url(${background})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		height: "100vh",
		width: "100vw",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.4)",
	};

	const cardStyle = {
		backgroundColor: "transparent",
		border: "none",
		width: "20%",
		height: "50%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	};

	const labelStyle = {
		fontWeight: "bold",
	};

	const googleButtonStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '5px 10px',
		border: 'none',
		borderRadius: '5px',
		backgroundColor: '#ffffff',
		boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
		cursor: 'pointer',
		color: "red", 
	  };
	  
	  const googleButtonTextStyle = {
		marginLeft: '10px',
		fontSize: '14px',
		fontWeight: 'bold',
		color: '#757575',
	  };
	  const GoogleLoginButton = ({ onClick }) => {
		return (
		  <button style={googleButtonStyle} onClick={onClick}>
			<FaGoogle size={20} />
			<span style={googleButtonTextStyle}>Sign in with Google</span>
		  </button>
		);
	  };
	return (
		<div style={backgroundStyle}>
			<Card style={cardStyle}>
				<h2 className="text-center mb-4">Log In</h2>
				{error && <Alert variant="danger">{error}</Alert>}
				<Form onSubmit={handleSubmit}>
					<Form.Group id="email">
						<Form.Label style={labelStyle}>Email</Form.Label>
						<Form.Control
							type="email"
							ref={emailRef}
							required
							style={{ paddingLeft: "1.5rem" }}
						/>
						<FontAwesomeIcon className="i" icon={faUser} />
					</Form.Group>
					<Form.Group id="password">
						<Form.Label style={labelStyle}>Password</Form.Label>
						<Form.Control
							type="password"
							ref={passwordRef}
							required
							style={{ paddingLeft: "1.5rem" }}
						/>
						<FontAwesomeIcon className="i" icon={faLock} />
					</Form.Group>
					<GoogleLoginButton disabled={loading} onClick={signInWithGoogle} />
					<Button
						disabled={loading}
						className="w-100 mt-4"
						type="submit"
						variant="success"
					>
						Log In
					</Button>
				</Form>
				<div className="w-100 text-center mt-4 ">
					<Link to="/forgot-password" style={{ color: "white" }}>
						Forgot Password?
					</Link>
				</div>
				<div className="w-100 text-center mt-4">
					Don't have an account?{" "}
					<Link to="/signup" style={{ color: "white" }}>
						Sign Up
					</Link>
				</div>
			</Card>
		</div>
	);
}
