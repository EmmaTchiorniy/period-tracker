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
    <Navbar
      bg="light"
      data-bs-theme="light"
      fixed="bottom"
      className="h-20 bg-[#f3f3f3] py-0"
    >
      <Container className="flex justify-around">
        <Nav className="w-full flex justify-around items-center pt-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <div key={item.path} className="flex-1 flex justify-center">
                <Nav.Link
                  as={Link}
                  to={item.path}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <img
                    src={isActive ? item.iconFilled : item.iconOutline}
                    alt={item.label}
                    className={`w-5 h-5 mb-1 ${isActive ? "opacity-100" : "opacity-40"}`}
                  />
                  <span className={`text-xs ${isActive ? "text-black" : "text-gray-400"}`}>
                    {item.label}
                  </span>
                </Nav.Link>
              </div>
            );
          })}
        </Nav>
      </Container>
    </Navbar>
  );
}
