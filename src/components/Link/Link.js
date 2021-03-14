import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InnerLink = styled.a`
    color: #61dafb;
`
const Link = ({ url, title }) => (
    <InnerLink
        href={url}
        target="_blank"
        rel="noopener noreferrer"
    >
        {title}
    </InnerLink>
)

Link.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Link;