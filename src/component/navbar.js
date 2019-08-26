import React from "react";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import "./content.css";

const Header = props => {
  return (
    <div>
      <>
        <Navbar className="navbar">
          <Navbar.Brand href="#home" className="navbar1">
            Code-Codean.com
          </Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <Button className="button" href="#profile">
              Profile
            </Button>
            <Button className="button" href="#about">
              About
            </Button>
          </Form>
        </Navbar>
      </>
    </div>
  );
};
export default Header;
