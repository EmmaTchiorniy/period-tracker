import Container from "react-bootstrap/cjs/Container.js";
import Nav from "react-bootstrap/cjs/Nav.js";
import Navbar from "react-bootstrap/cjs/Navbar.js";
import "./navigation-bar.scss";
import { Link } from "react-router";
import { useState } from "react";
import HomeIcon from "./navbar-icons/home-icon";
import AccountIcon from "./navbar-icons/account-icon";
import TrackIcon from "./navbar-icons/track-icon";

enum IconState {
  Home,
  Track,
  Account,
}

export default function NavigationBar() {
  const [activeIcon, setActiveIcon] = useState(IconState.Home);

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
              setActiveIcon(IconState.Home);
            }}
          >
            <div className="flex flex-col items-center">
              <HomeIcon isActive={activeIcon == IconState.Home} />
              <p className="mb-0">Home</p>
            </div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/track"
            onClick={() => {
              setActiveIcon(IconState.Track);
            }}
          >
            <div className="flex flex-col items-center">
              <TrackIcon isActive={activeIcon == IconState.Track} />
              <p className="mb-0">Track</p>
            </div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/account"
            onClick={() => {
              setActiveIcon(IconState.Account);
            }}
          >
            <div className="flex flex-col items-center">
              <AccountIcon isActive={activeIcon == IconState.Account} />
              <p className="mb-0">Account</p>
            </div>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
