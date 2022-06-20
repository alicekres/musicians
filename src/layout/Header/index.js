import React from 'react';
import { NavLink } from 'react-router-dom';
import { BackButton } from '../../components';

import styles from './index.module.css';

const Header = () => {
    let activeStyle = {
        textDecoration: 'none',
        color: '#1d1c1c',
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
                        className={styles.navlink}
                        style={({ isActive }) =>
                            isActive ? activeStyle : notactiveStyle
                        }
                    >
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/songlyrics"
                        className={styles.navlink}
                        style={({ isActive }) =>
                            isActive ? activeStyle : notactiveStyle
                        }
                    >
                        FIND LYRICS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/albums"
                        className={styles.navlink}
                        style={({ isActive }) =>
                            isActive ? activeStyle : notactiveStyle
                        }
                    >
                        ALBUMS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={styles.navlink}
                        style={({ isActive }) =>
                            isActive ? activeStyle : notactiveStyle
                        }
                    >
                        CONTACT
                    </NavLink>
                </li>
                <BackButton />
            </ul>
        </nav>
    );
};

export default Header;
