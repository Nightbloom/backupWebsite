import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBar } from "./Sidebar";
import "./Navbar.css";

export default function NavBar() {
  const [sidebar, setsidebar] = useState(false);
  const showSideBar = () => setsidebar(!sidebar);
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color,
        backgroundColor: color,
        height: 2,
        marginTop: 5,
      }}
    />
  );
  const ColoredLines = ({ color }) => (
    <hr
      style={{
        color,
        backgroundColor: color,
        height: 2,
        marginTop: 5,
        marginLeft: 25,
      }}
    />
  );
  return (
    <>
      <div className="marginb">
        <Link to="#" className="">
          <FaIcons.FaBars onClick={showSideBar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="toggle-items">
            <Link to="#" className="flex flex-row">
              <span className="mt-4 text-black ml-8 font-medium text-xl">
                MENU
              </span>
              <AiIcons.AiOutlineClose className="ml-40 mt-4 text-slate-400" />
            </Link>
            <ColoredLine color="grey" />
          </li>
          {SideBar.map((item, index) => {
            return (
              <div>
                <li key={index} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
                <ColoredLines color="#D3D3D3" />
              </div>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
