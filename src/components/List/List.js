import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/Link';
import styled from 'styled-components';

const Title = styled.h2`
    padding: 10px 0;
    border-bottom: 1px solid lightGray;
`

const ListWrapper = styled.ul`
    list-style: none;
    text-align: left;
    padding: 0;
`
const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
`
const Label = styled.span`
    font-weight: strong;
`

const List = ({ items, title }) => {
    return (
        <>
            <Title>{title}</Title>
            <ListWrapper>
                {items.map(item => (
                    <ListItem key={item.label}>
                        <Label>{item.label}</Label>{item.value}
                    </ListItem>
                ))}
            </ListWrapper>
        </>
    );
}

Link.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string
}

export default List;