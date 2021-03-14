import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/Link';

const List = ({ items }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.label}>
                    <strong>{item.label}</strong>{item.value}
                </li>
            ))}
        </ul>
    );
}

Link.propTypes = {
    items: PropTypes.array
}

export default List;