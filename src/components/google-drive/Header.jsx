import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { currentUser } = useAuth();
  return (
    <Navbar
      bg="light"
      expand="sm"
      style={{
        display: "flex",
        justifyContent: "space-between",
        aligmItems: "center",
      }}>
      <Navbar.Brand
        as={Link}
        to={currentUser ? "/" : "/login"}
        style={{
          display: "flex",
          justifyContent: "space-between",
          justifyItems: "center",
          marginTop: "3px",
        }}>
        <img
          src="https://kstatic.googleusercontent.com/files/f4b4fbcc6119576da7ab3f68270196009fc1b16f1927910842d793c385115593b6dd5fbe9a1e21fe64f3cbbc509c3a02c95ebc9635f76c355282482986f1fe7d"
          style={{
            maxHeight: "2em",
            marginRight: "2vw",
            marginLeft: "2vw",
            marginTop: "3px",
          }}
        />
        <p
          style={{
            marginTop: "6px",
          }}>
          Google Drive
        </p>
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/profile" style={{ fontSize: "20px" }}>
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
