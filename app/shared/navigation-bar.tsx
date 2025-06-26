import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navigation-bar.scss";
import { Link } from "react-router";
import { useState } from "react";
import HomeIcon from "./navbar-icons/home-icon";
import AccountIcon from "./navbar-icons/account-icon";
import TrackIcon from "./navbar-icons/track-icon";

export default function NavigationBar() {
  const [homeActive, setHomeActive] = useState(false);
  const [trackActive, setTrackActive] = useState(true);
  const [accountActive, setAccountActive] = useState(false);

  return (
    <Navbar
      bg="light"
      data-bs-theme="light"
      fixed="bottom"
      className="h-20 bg-[#f3f3f3] py-0"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Container>
        <Nav className="nav-items pt-1">
          <Nav.Link
            as={Link}
            to="/"
            onClick={() => {
              setHomeActive(true);
              setAccountActive(false);
              setTrackActive(false);
            }}
          >
            <div className="flex flex-col items-center">
              <HomeIcon isActive={homeActive} />
              <p className="mb-0">Home</p>
            </div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/track"
            onClick={() => {
              setHomeActive(false);
              setAccountActive(false);
              setTrackActive(true);
            }}
          >
            <div className="flex flex-col items-center">
              <TrackIcon isActive={trackActive} />
              <p className="mb-0">Track</p>
            </div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/account"
            onClick={() => {
              setHomeActive(false);
              setAccountActive(true);
              setTrackActive(false);
            }}
          >
            <div className="flex flex-col items-center">
              <AccountIcon isActive={accountActive} />
              <p className="mb-0">Account</p>
            </div>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
