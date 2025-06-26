import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navigation-bar.scss";

import { Link, useLocation } from "react-router";

import HomeFilled from "../../resources/icons/house-2-fill.svg";
import HomeOutline from "../../resources/icons/house-2.svg";
import TrackFilled from "../../resources/icons/pen-writing-filled.svg";
import TrackOutline from "../../resources/icons/pen-writing.svg";
import AccountFilled from "../../resources/icons/user-filled.svg";
import AccountOutline from "../../resources/icons/user.svg";

// Navigation items
const navItems = [
  {
    path: "/",
    label: "Home",
    iconFilled: HomeFilled,
    iconOutline: HomeOutline,
  },
  {
    path: "/track",
    label: "Track",
    iconFilled: TrackFilled,
    iconOutline: TrackOutline,
  },
  {
    path: "/account",
    label: "Account",
    iconFilled: AccountFilled,
    iconOutline: AccountOutline,
  },
];

export default function NavigationBar() {
  const location = useLocation();
  return (
    <Navbar fixed="bottom" className="h-20 bg-[#f3f3f3] py-0">
      <Container>
        <Nav className="nav-items pt-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Nav.Link
                key={item.path}
                as={Link}
                to={item.path}
                className={isActive ? "active" : ""}
              >
                <img
                  src={isActive ? item.iconFilled : item.iconOutline}
                  alt={item.label}
                />
                <span>{item.label}</span>
              </Nav.Link>
            );
          })}
        </Nav>
      </Container>
    </Navbar>
  );
}
