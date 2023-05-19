import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Pages/PagesCSS/Profile.css";
import background from "../Images/Signup.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../Context/AuthContext";

export default function ForgotPassword() {
	const emailRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState("");
	const [message, setMessage] = useState(" ");
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await resetPassword(emailRef.current.value);
			setMessage("Check you inbox for further instructions");
		} catch {
			setError("There is no user record corresponding to this identifier.");
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

	return (
		<div style={backgroundStyle}>
			<Card style={cardStyle}>
				<h2 className="text-center mb-4">Forgot Password</h2>
				{error && <Alert variant="danger">{error}</Alert>}
				{message && <Alert variant="success">{message}</Alert>}
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
					<Button
						disabled={loading}
						className="w-100 mt-4"
						type="submit"
						variant="success"
					>
						Reset Password
					</Button>
				</Form>
				<div className="w-100 text-center mt-4 ">
					<Link to="/" style={{ color: "white" }}>
						Login
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
