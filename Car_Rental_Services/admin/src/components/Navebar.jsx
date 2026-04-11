import React, { useRef, useState } from "react";
import { navbarStyles as s } from "../assets/dummyStyles";
import { Link } from "react-router-dom";
import logo from "../assets/logocar.png";
import { CalendarCheck, Car, PlusCircle } from "lucide-react";

const navLinks = [
  { path: "/calendar", label: "Calendar", icon: CalendarCheck },
  { path: "/cars", label: "Cars", icon: Car },
  { path: "/add", label: "Add New", icon: PlusCircle },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef= useRef(null);
  const buttonRef= useRef(null);


  return (
    <div className={s.navbar(scrolled)}>
      <div className={s.navbarInner}>
        <div className={s.navbarCenter}>
          <div className={s.navbarBackground(scrolled)}>
            <div className={s.contentContainer}>
              <Link to="/" className={s.logoLink}>
                <div className={s.logoContainer}>
                  <img
                    src={logo}
                    alt="Logo"
                    className={s.logoImage}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                  <span className={s.logoText}>ADMIN</span>
                </div>
              </Link>
              <div className={s.desktopNav}>
                <div className={s.navLinksContainer}>
                  {navLinks.map((link, i) => {
                    const Icon = link.icon;

                    return (
                      <React.Fragment key={link.path}>
                        <Link to={link.path} className={s.navLink}>
                          <Icon className="w-4 h-4" />
                          <span>{link.label}</span>
                        </Link>

                        {i < navLinks.length - 1 && (
                          <div className={s.navDivider} />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
