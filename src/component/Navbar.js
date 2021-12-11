import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [show, setShow] = useState(false);


    const showIcon = () => {
        if (window.innerWidth <= 560) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        showIcon();
    }, []);

    window.addEventListener('resize', showIcon)

    console.log(show);
    return (
        <div className='nav text-center'>
            <NavLink exact to='/' className='l' activeClassName='active' >
                {show ? <i class="fas-link fas fa-home"></i> : <p className='link'>WELCOME</p>}
            </NavLink>
            <NavLink exact to='/profile' className='l' activeClassName='active' >
                {show ? <i class="fas-link fas fa-user-alt"></i> : <p className='link'>PROFILE</p>}
            </NavLink>
            <NavLink exact to='/portofolio' className='l' activeClassName='active' >
                {show ? <i class="fas-link fas fa-laptop-code"></i> : <p className='link'>PORTOFOLIO</p>}
            </NavLink>
            <NavLink exact to='/contact' className='l' activeClassName='active' >
                {show ? <i class="fas-link fas fa-file-alt"></i> : <p className='link'>CONTACT</p>}
            </NavLink>
            {/* <NavLink exact to='/activity' className='l' activeClassName='active' >
                {show ? <i class="fas-link fas  fa-laptop-code"></i> : <p className='link'>ACTIVITY</p>}
            </NavLink> */}
        </div >
    )
}

export default Navbar;