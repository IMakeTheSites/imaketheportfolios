import React from "react";
import Link from "next/link";

const buttonLines = ["", "", ""];

const navs = [
  { name: "Home", link: "/" },
  { name: "About me", link: "/about" },
  { name: "My work", link: "/work" },
  { name: "How To Reach Me", link: "/contact" },
  { name: "Blog", link: "/blog" },
];

const Header = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [currentLink, setCurrentLink] = React.useState("/");
  return (
    <div>
      <div
        className={`menu-btn ${isOpen ? "close" : "show"}`}
        onClick={() => setOpen(!isOpen)}
      >
        {buttonLines.map((bl, idx) => (
          <div className="btn-line" key={`btn_line_${idx}`} />
        ))}
      </div>
      <nav className={`menu ${isOpen ? "show" : "close"}`}>
        <div className="menu-branding">
          <div className="portrait">Mark</div>
        </div>
        <ul className={`menu-nav ${isOpen ? "show" : "close"}`}>
          {navs.map((nav, idx) => {
            const { name, link } = nav;
            return (
              <li
                className={`nav-item ${currentLink === link ? "current" : ""} ${
                  isOpen ? "show" : "close"
                }`}
                key={`nav_item_${idx}`}
                onClick={() => {
                  setCurrentLink(link);
                  setOpen(false);
                }}
              >
                <Link href={link}>
                  <a className="nav-link">{name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
