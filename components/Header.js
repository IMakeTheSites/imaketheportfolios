import Link from "next/link";
var classNames = require("classnames");

const menuBtn = window.document.querySelector(".menu-btn");
const menu = window.document.querySelector(".menu");
const menuNav = window.document.querySelector(".menu-nav");
const menuBranding = window.document.querySelector(".menu-branding");
const navItems = window.document.querySelectorAll(".nav-item");

let showMenu = false;
// let menuBtn;

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}
const Header = () => (
  <div>
    <div className="menu-btn" onClick={toggleMenu}>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>
    <nav className="menu">
      <div className="menu-branding">
        <div className="portrait"></div>
      </div>
      <ul className="menu-nav">
        <li className="nav-item current">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link">About Me</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/work">
            <a className="nav-link">My Work</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <a className="nav-link">How To Reach Me</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/blog">
            <a className="nav-link">Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
