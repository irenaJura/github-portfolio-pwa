import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import logo from '../../GitHub-Mark-64px.png';

const Header = () => (
    <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>
            My Github Portfolio
        </h1>
    </header>
);

Header.propTypes = {
    logo: PropTypes.string.isRequired
}

export default Header;