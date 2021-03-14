import React from 'react';
import './Link.css';
import PropTypes from 'prop-types';

const Link = ({ url, title }) => (
    <a
        className="App-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
    >
        {title}
    </a>
)

Link.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Link;