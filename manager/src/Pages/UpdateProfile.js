import React from "react";
import "./PagesCSS/Signup.css";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useAuth } from "../Context/AuthContext";

// import "bootstrap/dist/css/bootstrap.min.css"

const sectionStyle = {
	backgroundSize: "cover",
	backgroundPosition: "center",
	height: "100vh",
	width: "100vw",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
    backgroundColor:"rgba(111, 109, 106, 88)"
};

export default function UpdateProfile() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { currentUser,updatePassword,updateEmail } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	 function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("Passwords do not match");
		}

        const promises = []
        setError("");
        setLoading(true);
        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        } 
        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }
        Promise.all(promises).then(() => {
            navigate("/")
        }).catch(()=> { 

            setError("Failed to Update Account ")
        }).finally(()=> { 
            setLoading(false)
        })
        

    }


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
		<div style={sectionStyle}>
			<Card style={cardStyle}>
				<h1 className="text-center mb-4">Update Profile</h1>
				{error && <Alert variant="danger">{error}</Alert>}
				<Form onSubmit={handleSubmit}>
					<Form.Group id="email">
						<Form.Label style={labelStyle}>Email</Form.Label>
						<Form.Control
							type="email"
							ref={emailRef}
							placeholder="Email Address"
							required
                            defaultValue={currentUser.email}
						/>
					</Form.Group>
					<Form.Group id="password">
						<Form.Label style={labelStyle}>Password</Form.Label>
						<Form.Control
							type="password"
							ref={passwordRef}
							placeholder="Leave blank to keep the same"
							
						/>
						<Form.Label style={labelStyle}> Confirm Password</Form.Label>
						<Form.Control
							type="password"
							ref={passwordConfirmRef}
							placeholder="Leave blank to keep the same"
						
						/>
					</Form.Group>
					<Button
						disabled={loading}
						className="w-100 mt-4"
						type="submit"
						variant="warning"
					>
						Update
					</Button>
				</Form>
				<div className="w-100 text-center mt-4">
					
					<Link to="/" style={{ color: "black" }}>
						Cancel
					</Link>
				</div>
			</Card>
		</div>
	);
}
