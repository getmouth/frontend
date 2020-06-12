import React from 'react';
import { useSelector } from 'react-redux';
import './Header.scss';

const Header = () => {
    const user = useSelector(state => state.user);
    const onLogout = () => {
        localStorage.clear();
    }

    return (
        <div className="header">
            <a className="logo-link">
                <h2 className="logo">Start Fresh</h2>
            </a>
            <div className="authenticate">
                {
                    user
                    ? <a href="/" onClick={onLogout}>Logout</a>
                    : <a href="/login" >Login</a>
                }
            </div>
        </div>
    )
}

export default Header;