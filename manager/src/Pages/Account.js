import React from "react";
import { Card, Button } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const sectionStyle = {
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(111, 109, 106, 88)",
};

const cardStyle = {
  backgroundColor: "",
  border: "1px solid #ccc",
  width: "30%",
  height: "60%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "20px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
};

const profilePicStyle = {
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "20px",
};

const accountInfoStyle = {
  marginBottom: "20px",
};

export default function Account() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/");
    } catch {
      // Handle error
    }
  }

  return (
    <>
      <div style={sectionStyle}>
        <Card style={cardStyle}>
          <Card.Body>
            <div className="text-center">
              <img
                src={localStorage.getItem("profilepic")}
                alt="Profile"
                style={profilePicStyle}
              />
            </div>
            <div className="text-center" style={accountInfoStyle}>
              <h2>{localStorage.getItem("name")}</h2>
              <p>{currentUser.email}</p>
            </div>
            <div className="text-center">
              <Link to="/update-profile" className="btn btn-success mt-2">
                Update Profile
              </Link>
            </div>
            <div className="w-100 text-center mt-2">
              <Button
                variant="link"
                style={{ color: "black" }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
