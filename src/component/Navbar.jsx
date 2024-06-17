import React from 'react';
import "./../assets/css/header.css"

const Navbar = () => {
    return (
        <nav className="bg-blur">
            <div className="navbar container">
                <div className="brand">
                    <a href="/" aria-current="page" className="active nuxt-link-active">
                        <div className="logo">
                        </div>
                    </a>
                </div>
                <div className="menu-wrapper active">
                    <div className="menu-container">
                        <div className="menu-close menu-item">
                            <i className="mh-icon icon-close">
                                <svg width="24" height="24" viewBox="0 0 24 24"></svg>
                            </i>
                        </div>
                        <ul className="menu">
                            <li><a href="" className="nav-link">Movies</a></li>
                            <li><a href="" className="nav-link">TV Shows</a></li>
                            <li>
                                <a href="/suggest" className="nav-link has-icon">
                                    <span>Suggest me</span>
                                    <i className="mh-icon icon-arrow-right">
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hamburger menu-item">
                    <i className="mh-icon icon-menu">
                        <svg width="24" height="24" viewBox="0 0 24 24"></svg>
                    </i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
