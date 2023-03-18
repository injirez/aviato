import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ProfileButton } from "./HeaderComponents/ProfileButton";

export const Header = () => {
  return (
  

    <AppBar className="z-app-bar" style={{ height: "40px" }}>
      <Toolbar
        style={{
          minHeight: "40px",
          fontSize: "32px",
          lineHeight: "24px",
          paddingLeft: "10px",
        }}
      >
        
          <Typography
            style={{
              flexGrow: 1,
              fontSize: "32px",
              lineHeight: "24px",
              marginLeft: "5px",
            }}
          >
            <Navbar.Brand href="/home">
            Aviato
            </Navbar.Brand>
          </Typography>

          {/* <img className='header-image' src = {require("./brand-aviato.svg").default}></img> */}
      
        <Box className="z-footer-headers-elements">
          {window.sessionStorage.getItem("isLogged") !== "true" ? (
            <>
              <Nav.Link
                href="/login"
                style={{ display: "inline-block", paddingRight: "10px" }}
              >
                <Typography>Sign in</Typography>
              </Nav.Link>
              <Nav.Link
                href="/login"
                style={{ display: "inline-block", paddingRight: "40px" }}
              >
                <Typography>Sign up</Typography>
              </Nav.Link>
            </>
          ) : null}
          <Nav.Link
            href="#deets"
            style={{ display: "inline-block", paddingRight: "10px" }}
          >
            <ProfileButton/>
          </Nav.Link>
          <Nav.Link
            
            style={{ display: "inline-block", paddingRight: "10px" }}
          >
            <FontAwesomeIcon icon={faHeart} fontSize="23px" />
          </Nav.Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
