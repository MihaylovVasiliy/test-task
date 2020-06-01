import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ListGroup = ({
                       children, className, message,  tag: Tag, ...attrs
                   }) => {
    const classes = classNames(
        'list-group',
        className,
    );

    return (
        <Tag className={classes} {...attrs}>
            {children}
        </Tag>
    );
};

ListGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    message: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ListGroup.defaultProps = {
    children: null,
    className: '',
    message: 'Lorem ipsum',
    tag: 'ul',
};

export default ListGroup;