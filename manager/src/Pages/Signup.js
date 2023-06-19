import React from 'react';
import './PagesCSS/Signup.css';
import background from '../Images/log.jpg';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useAuth } from '../Context/AuthContext';

// import "bootstrap/dist/css/bootstrap.min.css"

const sectionStyle = {
	backgroundImage: `url(${background})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	height: '100vh',
	width: '100vw',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

export default function Signup() {
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const numberRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match');
		}

		try {
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			// Redirect or navigate to the desired page
			navigate('/');
		} catch {
			setError('The email address is already in use by another account. ');
			setLoading(false);
		}
	}
	console.log(firstNameRef);

	const cardStyle = {
		backgroundColor: 'transparent',
		border: 'none',
		width: '20%',
		height: '50%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	};

	const labelStyle = {
		fontWeight: 'bold',
	};

	return (
		<div style={sectionStyle}>
			<Card style={cardStyle}>
				<h1 className="text-center mb-4">Sign up</h1>
				{error && <Alert variant="danger">{error}</Alert>}
				<Form onSubmit={handleSubmit}>
					<Form.Group id="First-name">
						<Form.Label style={labelStyle}>First Name </Form.Label>
						<Form.Control
							type="name"
							ref={firstNameRef}
							placeholder="First Name"
							required
						/>
					</Form.Group>
					<Form.Group id="last-name">
						<Form.Label style={labelStyle}>Last Name </Form.Label>
						<Form.Control
							type="name"
							ref={lastNameRef}
							placeholder="Last Name"
							required
						/>
					</Form.Group>
					<Form.Group id="number">
						<Form.Label>Phone number</Form.Label>
						<Form.Control
							type="number"
							placeholder="(XXX)XXX-XXXX"
							ref={numberRef}
							required
						/>
					</Form.Group>
					<Form.Group id="email">
						<Form.Label style={labelStyle}>Email</Form.Label>
						<Form.Control
							type="email"
							ref={emailRef}
							placeholder="Email Address"
							required
						/>
					</Form.Group>
					<Form.Group id="password">
						<Form.Label style={labelStyle}>Password</Form.Label>
						<Form.Control
							type="password"
							ref={passwordRef}
							placeholder="Password"
							required
						/>
						<Form.Label style={labelStyle}> Confirm Password</Form.Label>
						<Form.Control
							type="password"
							ref={passwordConfirmRef}
							placeholder="Confirm Password"
							required
						/>
					</Form.Group>
					<Button
						disabled={loading}
						className="w-100 mt-4"
						type="submit"
						variant="warning"
					>
						Sign up
					</Button>
				</Form>
				<div className="w-100 text-center mt-4">
					Already a member?{' '}
					<Link to="/" style={{ color: 'white' }}>
						Log in
					</Link>
				</div>
			</Card>
		</div>
	);
}
