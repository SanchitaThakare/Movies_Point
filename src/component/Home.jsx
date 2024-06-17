import React from 'react';
import Navbar from './Navbar';
import './../assets/css/movie.css';
import "./../App.css"
import Movies from './movies/Movies';
import Search from './Search';

const MaileHereko = () => {
    return (
        <div className='app-header'>
           
            <div className="default-view">
                <div className="status-bar"></div>
                <Navbar />
                <div className="index page container">
                    <Search/>
                    <Movies />
                </div>
            </div>
        </div>

    );
};

export default MaileHereko;
