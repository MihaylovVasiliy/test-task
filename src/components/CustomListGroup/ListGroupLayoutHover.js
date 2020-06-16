/* eslint-disable */
import React, {Fragment} from 'react';

import ListGroupItem from './ListGroupItem';
import ListGroup from "./ListGroup";

const ListGroupLayoutHover = (props) => (
    <Fragment>
        <ListGroup {...props}>
            <ListGroupItem {...props}>
                <div className="list-group-layout__figure_wrapper">
                <figure className="list-group-layout__figure">
                    <figcaption className="list-group-layout__figure_hover-message"> {props.hover_message} </figcaption>
                    <img className="list-group-layout__figure_image" src={props.logo_image}/>
                    <figcaption className="list-group-layout__figure_message"> {props.message} </figcaption>
                </figure>
                </div>
            </ListGroupItem>
        </ListGroup>
    </Fragment>
);
export default ListGroupLayoutHover;
/* eslint-enable */