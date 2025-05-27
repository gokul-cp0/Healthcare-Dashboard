import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoNotificationsSharp } from "react-icons/io5";
import pfpPic from '../assets/pfp.png';
import '../styles/header.css';
import { FaPlus } from "react-icons/fa6";
import { RiMenu2Fill } from "react-icons/ri";

const Header = ({ navbar, setNavbar }) => {

    const [searchBar, setSearchBar] = useState(true);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.className.includes('search-input')) {
                setSearchBar(true);
            }
            setNavbar(false);
        };
        const handleScroll = () => {
            setNavbar(false);
            setSearchBar(true);
        };
        document.addEventListener("click", handleClickOutside);
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <header>
            <div className="fixed-header">
                <div className="align-header">
                    <div className='header-left'>
                        <button className='nav-button' onClick={() => setNavbar(!navbar)}><RiMenu2Fill /></button>
                        <h2 className='header-brand'>Health<span>care.</span></h2>
                        <div className='search-note'>
                            <div className="search-bar">
                                <FiSearch className='search-bar-icon one' />
                                <button className='search-bar-icon two' onClick={() => setSearchBar(!searchBar)}><FiSearch /></button>
                                <input className='search-input' type="text" placeholder='search' style={searchBar ? {} : { display: 'block' }} />
                            </div>
                            <div className='note-icon'>
                                <IoNotificationsSharp />
                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="pfp-pic">
                            <img src={pfpPic} alt="" />
                        </div>
                        <div className="add-button"><FaPlus /></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
