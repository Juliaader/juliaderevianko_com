import React, {useEffect, useState} from 'react'
import './Header.css'
import {NavLink} from "react-router-dom";

const links = [
    {
        title: 'Work',
        href: '/work/'
    }, {
        title: 'About',
        href: '/about'
    }
]

const Header = () => {
    const [hamburger, setHamburger] = useState(false);

    useEffect(() => {
        document.body.style.overflow = hamburger ? 'hidden' : 'auto';
    }, [hamburger]);

    return (
        <>
            <div className='header container'>
                <NavLink to='/' onClick={() => setHamburger(false)}>
                    <img className='logo' src="/images/logo.svg" alt="Logo"/>
                </NavLink>
                <div className={`hamburger ${hamburger ? 'hamburger_opened' : 'hamburger_closed'}`}
                     onClick={() => setHamburger(prev => !prev)}>
                    <div className="hamburger__line"></div>
                    <div className="hamburger__line"></div>
                    <div className="hamburger__line"></div>
                </div>
                <ul className='header_links'>

                    {links.map((link, key) => (
                        <li key={key}><NavLink to={link.href}>{link.title}</NavLink></li>
                    ))}
                </ul>
            </div>
            {hamburger &&
                <div className='hamburger_menu'>
                    <ul className="hamburger_links">
                        {links.map((link, key) => (
                            <li key={key}>
                                <NavLink to={link.href} onClick={() => setHamburger(false)}>{link.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </>

    )
}

export default Header