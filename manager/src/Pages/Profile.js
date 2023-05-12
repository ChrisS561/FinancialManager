import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Pages/PagesCSS/Profile.css";
import background from "../Images/Signup.jpg";
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";


export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      navigate("/home");
    } catch {
      setError("Failed to log in");
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
        <h2 className="text-center mb-4">Log In</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label style={labelStyle}>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required style={{paddingLeft:"1.5rem"}}/>
            <FontAwesomeIcon className="i" icon={faUser} />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label  style={labelStyle}>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required style={{paddingLeft:"1.5rem"}}/>
            <FontAwesomeIcon className="i" icon={faLock} />
          </Form.Group>
          <Button disabled={loading} className="w-100 mt-4" type="submit" variant="success">
            Log In
          </Button>
        </Form>
        <div className="w-100 text-center mt-4 ">
          <Link to="/forgot-password" style={{color:"white"}}>Forgot Password?</Link>
        </div>
        <div className="w-100 text-center mt-4">
          Don't have an account? <Link to="/signup" style={{color:"white"}}>Sign Up</Link>
        </div>
      </Card>
    </div>
  );
}
