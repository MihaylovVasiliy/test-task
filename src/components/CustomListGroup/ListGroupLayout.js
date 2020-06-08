/* eslint-disable */
import React, {Fragment} from 'react';

import ListGroupItem from './ListGroupItem';
import ListGroup from "./ListGroup";

const ListGroupLayout = (props) => (
    <Fragment>
        <ListGroup {...props}>
            <ListGroupItem {...props}>
                <figure className="ListGroupLayout__figure">
                    <img className="ListGroupLayout__figure_image" src={props.logo_image}/>
                    <figcaption className="ListGroupLayout__figure_message"> {props.message} </figcaption>
                </figure>
            </ListGroupItem>
        </ListGroup>
    </Fragment>
);
export default ListGroupLayout;
/* eslint-enable */