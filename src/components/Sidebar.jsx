import React, { useEffect, useState } from 'react';
import '../styles/sidebar.css';
import { GeneralNav, ToolsNav } from '../data/navLinks';
import { FaAnglesLeft } from "react-icons/fa6";


const Sidebar = ({ navbar, setNavbar }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sidebarPosition, setSidebarPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setSidebarPosition(window.scrollY - 10);
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='sidebar' style={navbar ? { display: 'block', top: `${sidebarPosition}px` } : {}}>
      <button className='sidebar-button' onClick={() => setNavbar(!navbar)}><FaAnglesLeft /></button>
      <span className='sidebar-head'>General</span>
      <div className="lists-div">
        {GeneralNav.map((value, index) => {
          let Icon = value.icon;
          return <a className={`nav-link ${index === activeIndex ? "activeNav" : ''}`} href="#" key={index} onClick={() => setActiveIndex(index)}><Icon /> {value.name}</a>
        })}
      </div>
      <span className='sidebar-head'>Tools</span>
      <div className="lists-div toolsNav">
        {ToolsNav.map((value, index) => {
          let Icon = value.icon;
          return <a className={`nav-link ${index + 100 === activeIndex ? "activeNav" : ''}`} href="#" key={index} onClick={() => setActiveIndex(index + 100)}><Icon /> {value.name}</a>
        })}
      </div>
    </div>
  )
}

export default Sidebar;
