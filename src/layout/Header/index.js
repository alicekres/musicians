import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './index.module.css';

const Header = () => {
    let activeStyle = {
        textDecoration: 'none',
        color: 'grey',
        fontWeight: 'bold',
    };

    let notactiveStyle = {
        textDecoration: 'none',
        color: 'white',
    };

    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li>
                    <NavLink
                        to="/"
                        style={({ isActive }) =>
                            isActive ? activeStyle : notactiveStyle
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/songlyrics"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Find Lyrics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/albums"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Albums
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
