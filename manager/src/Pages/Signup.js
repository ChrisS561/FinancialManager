import React from 'react'
import "./PagesCSS/Signup.css"
import background from "../Images/log.jpg"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import { useRef, useState } from 'react'


// import "bootstrap/dist/css/bootstrap.min.css"


const sectionStyle = {backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"}

export default function Signup() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const firstRef = useRef();
    const lastRef = useRef();
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
            <h1 className="text-center mb-4">Sign up</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
            <Form.Group id="First-name">
                <Form.Label style={labelStyle}>First Name </Form.Label>
                <Form.Control type="name" ref={firstRef} placeholder='First Name' required />
              </Form.Group>
              <Form.Group id="last-name">
                <Form.Label style={labelStyle}>Last Name </Form.Label>
                <Form.Control type="name" ref={lastRef} placeholder='Last Name' required />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label style={labelStyle}>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} placeholder='Email Address' required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label  style={labelStyle}>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} placeholder='Password' required />
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-4" type="submit" variant="warning">
                Sign up
              </Button>
            </Form>
            <div className="w-100 text-center mt-4">
               Already a member? <Link to="/" style={{color:"white"}}>Log in</Link>
            </div>
          </Card>
        </div>
      );
    }
