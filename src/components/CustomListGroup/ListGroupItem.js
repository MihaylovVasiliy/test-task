import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ListGroupItem = ({
                           children,
                           className,
                           tag: Tag,
                           message,
                           ...attrs
                       }) => {
    const classes = classNames(
        'list-group-item',
        className,
    );

    return (
        <Tag className={classes} {...attrs}>
            {children}
        </Tag>
    );
};

ListGroupItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    message: PropTypes.string,
};

ListGroupItem.defaultProps = {
    children: null,
    className: '',
    tag: 'figure',
    message: 'lorem',
};

export default ListGroupItem;

