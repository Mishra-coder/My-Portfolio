import React from 'react';

const Navbar = ({ activePage, setActivePage }) => {
    const navItems = ['About', 'Projects', 'Skills', 'Achievements', 'Resume', 'Contact'];

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {navItems.map((item) => (
                    <li key={item} className="navbar-item">
                        <button
                            className={`navbar-link ${activePage === item ? 'active' : ''}`}
                            onClick={() => setActivePage(item)}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
