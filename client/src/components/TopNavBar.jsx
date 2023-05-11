import React from "react";
import img from "../assets/image2.jpeg";
import PhoneButton from "./PhoneButton";

function TopNavBar() {
const phoneNumber = "+13182642314";

  return (
    <nav className="top-nav">
      <div className="top-nav__brand">
        <a href="/">
          <img src={img} alt="LoadMeSomething" />
        </a>
      </div>
      <ul className="top-nav__menu">
        <li className="top-nav__item">
          <PhoneButton phoneNumber={phoneNumber} />
        </li>
      </ul>
    </nav>
  );
}

export default TopNavBar;