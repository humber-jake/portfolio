import React, { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);

  const burgerToggle = () => {
    setToggle(!toggle);
  };

  const hideBurger = () => {
    setToggle(false);
  };

  const { resume } = props;

  const socials = resume.socialmedia;

  const links = Object.keys(resume);

  const navLinks = links.map((link, index) => {
    return (
      <Link to={link} className="NavLink" key={index} onClick={hideBurger}>
        {link}
      </Link>
    );
  });

  return (
    <>
      <div className="SocialMediaBookmarks">
        <a href={socials.LinkedIn}>
          <LinkedInIcon htmlColor="white" />
        </a>
        <a href={socials.Instagram}>
          <InstagramIcon htmlColor="white" />
        </a>
        <a href={socials.GitHub}>
          <GitHubIcon htmlColor="white" />
        </a>
      </div>
      <div className="Navbar">
        <div className="NavbarElements">
          <Link to="/" className="Name">
            {resume.website}
          </Link>

          <div className="NavLinks">
            <Link to="/" className="NavLink Home">
              home
            </Link>
            {navLinks.slice(5, 8)}
          </div>
        </div>
        <div className="Burger" onClick={burgerToggle}>
          <MenuOpenIcon />
        </div>
        <div className={toggle ? "BurgerMenu" : "BurgerMenu hidden"}>
          <Link to="/" className="NavLink Home" onClick={hideBurger}>
            home
          </Link>
          {navLinks.slice(5, 8)}
        </div>
      </div>
    </>
  );
};

export default Navbar;
